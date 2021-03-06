function log(msg) {
    console.log(msg);
}

var message = 'Hello World';

log(message);

var number = 1;

function doSomething(i) {
    for(i =0; i < 5; i++) {
        log(i);
        //let count = 2;// This can't be accessed outside the for loop
    }

    log('finally:' + i);
}

doSomething(number);

let count = 5;
//count = 'a'; //This can't be changed to alphabet.
let a: number;
a = 1;
// a = true;
// a = 'a';
let b: string;
let c: boolean;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

log('a:' + a);
log('b:' + b);
log('c:' + c);
log('d:' + d);
log('e:' + e);
log('f:' + f);

const colorRed = 0;
const colorGreen = 1;
const colorBlue = 2;
log('colorRed:' + colorRed);
log('colorGreen:' + colorGreen);
log('colorBlue:' + colorBlue);

enum color { Red, Green, Blue };
log('Red:' + color.Red);
log('Green:' + color.Green);
log('Blue:' + color.Blue);

enum color { Purple = 3 }; // This is a best practise to store values as enums, 
                        //if we don't declare values, there is a chance of over writing values
log('Red:' + color.Red);
log('Green:' + color.Green);
log('Blue:' + color.Blue);
log('Purple:' + color.Purple);

let strMessage; // type is any
strMessage = 'abc'; 
let endsWithC = (<string>strMessage).endsWith('c'); // This will work for string only
log('endsWithC:' + endsWithC);
let alternateway = (strMessage as string).endsWith('c');
log('alternateway:' + alternateway);

let doLog = (msg) => console.log(msg);
doLog('alternateway:' + alternateway);

// one way to implement inline 
// point: { x: number, y: number }
let drawPoint = (point: { x: number, y: number }) => {
    //....
}

drawPoint({
    x: 1,
    y: 2
    //name: 'abc' // We can declare any properties as input which can cause runtime errors
});

// Other ways is interface
interface Point {
    x: number,
    y: number
}

drawPoint = (point: Point) => {
    //....
}

drawPoint({
    x: 1,
    y: 2
});

