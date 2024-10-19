function throttle (func, delay) {
    let isThrottle = false
    return function (...args) {
        if(!isThrottle){
            func.apply(this, args)
            setInterval(()=>{
                isThrottle = !isThrottle
            },delay)
        }
    }
}

function throttle(func, delay) {
    let isThrottle = false;
    return function (...args) {
        if (!isThrottle) {
            func.apply(this, args);
            isThrottle = true;
            setTimeout(() => {
                isThrottle = false;
            }, delay);
        }
    }
}

Array.prototype.customThrottle = function () {
    const throttledFunc = throttle((i) => console.log("hi", i), 5000);
    this.forEach((i) => throttledFunc(i));
}


// [1, 2, 3, 4, 5].customThrottle()
// hi 1