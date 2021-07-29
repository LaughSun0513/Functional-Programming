function compose(...fns){
  return function(result) {
    const list = fns.slice();
    console.log(list)
      while(list.length > 0){
        const curFn = list.pop(); // 取出最后一个执行
        result = curFn(result);
      }
      return result;
  }
}
const fn1 = (x) => console.log('fn1'+x)
const fn2 = (x) => console.log('fn2'+x)
const fn3 = (x) => console.log('fn3'+x)

const composeFn = compose(fn1,fn2,fn3);
composeFn('xxx');
