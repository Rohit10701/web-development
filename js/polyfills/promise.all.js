function customPromiseAll(promiseArray) {
    if(promiseArray.length == 0){
        return Promise.resolve([])
    }

    let results = new Array(promiseArray.length);
    let count = 0 
    return new Promise((res, rej) => {
        promiseArray.forEach((promise, index) => {
            Promise.resolve(promise).then(data=>{
                results[index] = data
                count += 1
                if (count == promiseArray.length){
                    res(results)
                }
            }).catch(res => {
                rej(res)
            })
        });
    })
}

// Pollyfills

Array.prototype.myPromiseAll = function() {
    let promiseArray = this
    return customPromiseAll(promiseArray)
}

// Note 

Array.prototype.myPromiseAll = () => {
    let promiseArray = this
    return customPromiseAll(promiseArray)
}

// in this case this doesnt refer to array it refer to it lexical enviroment which is outside 
function test() {
    const myPromiseAll = () => {
        console.log(this); // 'this' here refers to the enclosing context of 'test'
    };

    myPromiseAll();
}

test();


function test() {
    function myPromiseAll() {
        console.log(this); // 'this' here refers to the instance of 'test' or global context
    }

    myPromiseAll();
}

test();