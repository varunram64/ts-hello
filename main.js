function log(msg) {
    console.log(msg);
}
var message = 'Hello World';
log(message);
var number = 1;
function doSomething(i) {
    for (i = 0; i < 5; i++) {
        log(i);
        //let count = 2;// This can't be accessed outside the for loop
    }
    log('finally:' + i);
}
doSomething(number);
var count = 5;
//count = 'a'; //This can't be changed to alphabet.
var a;
a = 1;
// a = true;
// a = 'a';
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
log('a:' + a);
log('b:' + b);
log('c:' + c);
log('d:' + d);
log('e:' + e);
log('f:' + f);
var colorRed = 0;
var colorGreen = 1;
var colorBlue = 2;
log('colorRed:' + colorRed);
log('colorGreen:' + colorGreen);
log('colorBlue:' + colorBlue);
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
log('Red:' + color.Red);
log('Green:' + color.Green);
log('Blue:' + color.Blue);
(function (color) {
    color[color["Purple"] = 3] = "Purple";
})(color || (color = {}));
; // This is a best practise to store values as enums, 
//if we don't declare values, there is a chance of over writing values
log('Red:' + color.Red);
log('Green:' + color.Green);
log('Blue:' + color.Blue);
log('Purple:' + color.Purple);
var strMessage; // type is any
strMessage = 'abc';
var endsWithC = strMessage.endsWith('c'); // This will work for string only
log('endsWithC:' + endsWithC);
var alternateway = strMessage.endsWith('c');
log('alternateway:' + alternateway);
var doLog = function (msg) { return console.log(msg); };
doLog('alternateway:' + alternateway);
// one way to implement inline 
// point: { x: number, y: number }
var drawPoint = function (point) {
    //....
};
drawPoint({
    x: 1,
    y: 2
    //name: 'abc' // We can declare any properties as input which can cause runtime errors
});
drawPoint = function (point) {
    //....
};
drawPoint({
    x: 1,
    y: 2
});
