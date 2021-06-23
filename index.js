
const MyPromise = require('./promise')

var p = new MyPromise((resolve, reject)=>{

    setTimeout(()=>{
        resolve(4)
    }, 10)

})

p.then()
p.then(1,2)
p.then((res1)=>{
    //4 res1
    console.log(res1, 'res1')
},e=>{
      console.log(e, 'res')
})
p.finally(function(){
    console.log('finally');
});





//MyPromise.all
let p1 = new MyPromise((resolve, reject) => {
  resolve('成功了')
})

let p2 = new MyPromise((resolve, reject) => {
  resolve('success')
})

let p3 =  MyPromise.reject('失败')

MyPromise.all([p1, p2]).then((result) => {
  console.log(result)               //['成功了', 'success']
}).catch((error) => {
  console.log(error)
})

MyPromise.all([p1,p3,p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error)      // 失败了，打出 '失败'
})




//MyPromise.race
// let p1 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   },1000)
// })
//
// let p2 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     reject('failed')
//   }, 500)
// })
//
// MyPromise.race([p1, p2]).then((result) => {
//   console.log(result)
// }).catch((error) => {
//   console.log(error)  // 打开的是 'failed'
// })




//finally  不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。