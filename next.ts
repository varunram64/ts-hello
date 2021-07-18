class Point {
    // private x: number;
    // private y: number;

    constructor(private _x?: number, private _y?: number) {
        // this.x = x;
        // this.y = y;
    }

    draw() {
        console.log('x:' + this._x);
        console.log('y:' + this._y); 
    }

    // Getter
    get x() {
        return this._x;
    }

    // Setter
    // Note: If this is commented or not present then the property is ready only
    set x(value) {
        if(value < 0)
            throw new Error('value cannot be less than 0');
        this._x = value;
    }
}

let point = new Point(1, 2);
point.x = 5;

point.draw();

// Default constructor an supply each parameter
// point = new Point(); // object for an instance of Point class
// point.x = 1; 
// point.y = 2;
// point.draw();

// let drawPoint = (point: Point) => {
//     //...   
//     console.log('x:' + point.x);
//     console.log('y:' + point.y); 
// }

// drawPoint({
//     x: 1,
//     y: 2
// });
