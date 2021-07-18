class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('x:' + this.x);
        console.log('y:' + this.y); 
    }
}

let point = new Point(1, 2);
point.draw();

// Default constructor an supply each parameter
 point = new Point(); // object for an instance of Point class
// point.x = 1; 
// point.y = 2;
point.draw();

// let drawPoint = (point: Point) => {
//     //...   
//     console.log('x:' + point.x);
//     console.log('y:' + point.y); 
// }

// drawPoint({
//     x: 1,
//     y: 2
// });
