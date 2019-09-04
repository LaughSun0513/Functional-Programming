class Functor {
    constructor(val){
        this._val = val
    }
    map(fn){
        return Functor.of(fn(this._val))
    }
}
Functor.of = function (val) { //of写法
    return new Functor(val)
}
//--------------------------------
// 代替if-else
// Either函子内部有两个值 左值 右值
// 右值 -- 正常情况下使用的值
// 左值 -- 右值不存在使用的默认值

class Either extends Functor {
    constructor(left,right){
        super()
        this.left = left;
        this.right = right;
    }
    map(fn){
        return this.right ?
            Either.of(this.left,fn(this.right)) : 
            Either.of(fn(this.left),this.right) 
    }
}
Either.of = function(left,right) {
    return new Either(left,right)
}

// 使用
var addOne = function (x) {
    return x+1
}
var res1 = Either.of(5,6).map(addOne);
console.log(res1) //Either { _val: undefined, left: 5, right: 7 }

var res2 = Either.of(1,null).map(addOne);
console.log(res2) //Either { _val: undefined, left: 2, right: null }

//--------通过Either函子的左右值思路实现错误处理机制-----------
// 代替try-catch
var Left = function(x) {
    this.__val = x
}
var Right = function(x) {
    this.__val = x
}
Left.of = function (x) {
    return new Left(x)
}
Right.of = function (x) {
    return new Right(x)
}
//区别
Left.prototype.map = function() {
    return this;
}
Right.prototype.map = function(fn) {
    return Right.of(fn(this.__val));
}
//使用
var getAge = user => user.age ? Right.of(user.age) : Left.of('ERROR');

// 1
var zhangsanAge = getAge({
    name:'zhangsan',
    age:"21"
}).map(age=>age);
console.log(zhangsanAge); //Right { __val: '21' }

// 2
var lisiAge = getAge({
    name:'lisi'
}).map(age=>age);
console.log(lisiAge); //Left { __val: 'ERROR' }