function makeCounter(initialValue = 0) {
    class Counter{
      constructor(initialValue){
        this.value = initialValue
      }
      increment(){
        return this.value ++
      }
    }
    const counter = new Counter(initialValue)
    return counter.increment.bind(counter)
}

function makeCounter2(initialValue = 0) {
    let value = initialValue
    return function () {
        return value ++
    }
}

const counter = makeCounter2()
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())