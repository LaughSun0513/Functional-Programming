const asyncFn1 = async () => {
  return new Promise((reslove, reject) => {
      setTimeout(()=>{
        console.log('async fn1');
        reslove('fn1')
      },1000)
  });
}
const asyncFn2 = async () => {
  return new Promise((reslove, reject) => {
      setTimeout(()=>{
        console.log('async fn2');
        reslove('fn2')
      },1500)
  });
}
const composePromise = (...fns) => {
  const curFn = fns.pop();
  return function(...args) {
      const fnList = fns.reverse();
      console.log(fnList);
      return fnList.reduce((result,nextFn)=>{
          return nextFn.call(null,result);
      }, Promise.resolve(curFn.apply(null,args)))
  }
}
const composePromiseFn = composePromise(asyncFn1,asyncFn2);
composePromiseFn()
  .then(res=>console.log(res));
