var Point = /** @class */ (function () {
    // private x: number;
    // private y: number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // this.x = x;
        // this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('x:' + this.x);
        console.log('y:' + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0');
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
point.X = 5;
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
