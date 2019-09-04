
//理解概念 -- 容器 函子
//函子是一种范畴，是一个容器
function Container(val){
    this._val = val
}
Container.prototype.map = function(fn){
    return new Container(fn(this._val))
}
var a = new Container("a-1");
console.log(a); // Container {_val: "a-1"}

var b = a.map(function(){
    return "b-1"
})
console.log(b); //Container {_val: "b-1"}
//----------------------------------------------------
var Container = function(val){
    this._val = val
}
Container.of = x => new Container(x); //函子有of方法 生成函数的容器
Container.prototype.map = function(fn){ //map 生成新的容器
    return Container.of(fn(this._val));
}
var a = Container.of("a-1");  // Container {_val: "a-1"}
console.log(a);

var b = a.map(x => "b-1");  //Container {_val: "b-1"}
console.log(b);
//----------------------------------------------------
class Functor {
    constructor(val){
        this._val = val
    }
    map(fn){
        return new Functor(fn(this._val)) //这种写法偏向于面向对象的写法
    }
}
var a = new Functor(2);
console.log(a);

var b = a.map(x=>x+2);
console.log(b);
//----------------------------------------------------
class Functor2 {
    constructor(val){
        this._val = val
    }
    map(fn){
        return Functor2.of(fn(this._val))
    }
}
Functor2.of = function (val) { //of写法
    return new Functor2(val)
}
var c = Functor2.of('c-1');
console.log(c);

var d = c.map(x=>'d-1');
console.log(d);
