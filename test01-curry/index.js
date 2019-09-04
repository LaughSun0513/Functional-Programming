var add = function(x){
  return function(y){
      return x+y;
  }
}

var increment = add(1);
console.log(increment(2));

var addTen = add(10);
console.log(addTen(2));
