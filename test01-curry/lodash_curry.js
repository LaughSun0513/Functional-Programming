const curry = require('lodash').curry;
const log = console.log;

//“预加载”函数的能力

//match
const match = curry(function(what,str){
      return str.match(what)
});

log(match(/\s+/g, "hello world"));
log(match(/\s+/g)("hello world"));

//replace
const replace = curry(function(what, replacement, str) {
  return str.replace(what, replacement);
});
const noVowels = replace(/[aeiou]/ig);
const censored = noVowels("*");
log(censored("Chocolate Rain"));

//filter
const filter = curry(function(f, ary) {
  return ary.filter(f);
});
const hasSpaces = match(/\s+/g);
log(filter(hasSpaces, ["tori_spelling", "tori amos"]));

