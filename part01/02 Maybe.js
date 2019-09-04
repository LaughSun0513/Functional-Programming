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
//Functor.of(null).map(s=>s.toUpperCase()); //由于传入null导致后面的map无法生成新的容器函子

class Maybe extends Functor {
    constructor(val){
        super()
        this._val= val
    }
    map(fn) {
        return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this._val))
    }
    isNothing(){
        return this._val === null || this._val === undefined;
    }

}
Maybe.of = function(val){
    return new Maybe(val)
}
var _null = Maybe.of(null); //更强的容错机制
console.log(_null); //Maybe { _val: null }

var a = Maybe.of("abc");
console.log(a);//Maybe { _val: 'abc' }

var b = a.map(s=>s.toUpperCase());
console.log(b);//Maybe { _val: 'ABC' }

