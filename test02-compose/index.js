const log = console.log;

// //组合
const compose = function(f,g){
    return function(x,y){
        return f(g(x));
    }
}


var toUpperCase = function(x) { return x.toUpperCase(); };
var exclaim = function(x) { return x + '!'; };
var shout = compose(exclaim, toUpperCase);

log(shout("send in the clowns")); // SEND IN THE CLOWNS!



// var UA = 'mozilla/5.0 (iphone;cpu iphone os 12_4 like mac os;zh-cn) applewebkit/537.51.1(khtml,like gecko) mobile/16g77 ucbrowser/12.5.6.1195';
// var iOSver= 'cpu iphone os 12_4 like mac os,12_4';
// console.log(matchBrowser(UA));
// console.log(matchIOS(iOSver));
