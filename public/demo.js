// var name = "abcsfd"
// var obj = {
//     name : "aasdas",
//     display : () => {
//         console.log(name)
//     }
// }


// var obj1 = {
//     name : 'abc'
// }

// obj.display.call(obj1)

// function muMemorize(fn, context) {
//     const res = {};
//     return function (...args) {
//         var argsCache = JSON.stringify(args);
//         if (!res[argsCache]) {
//             res[argsCache] = fn.call(context || this, ...args)
//         }
//         return res[argsCache]
//     }
// }

// const clumsysquare = (num1, num2) => {
//     for (let i = 0; i <= 1000000000; i++) { }
//     return num1 * num2
// }

// const memoizeClumzyProducts = muMemorize(clumsysquare)

// console.time("first call")
// console.log(memoizeClumzyProducts(2555, 4555))
// console.timeEnd("first call")

// console.time("second call")
// console.log(memoizeClumzyProducts(2555, 4555))
// console.timeEnd("second call")


// let abc = [ 1, 2, 3, 4, 5, 6, 7, 8]
// setTimeout(function(){
//     console.log(...abc)
// }, 1000)

// const calc = {
//     total: 0,
//     add(a) {
//         this.total += a;
//         return this
//     },
//     mul(a) {
//         this.total *= a;
//         return this
//     },
//     sub(a) {
//         this.total -= a;
//         return this
//     }
// }

// console.log(calc.add(10).mul(20).sub(10).total)


// const add = (a) => {
//     return function (b) {
//         console.log("Runings", a, b)
//         if (b) {
//             return add(a + b)
//         }
//         return a
//     }

// }

// console.log((add(2)))

// let val=null ;
// console.log(val == undefined)
// console.log(val === undefined)

