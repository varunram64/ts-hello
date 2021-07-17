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
