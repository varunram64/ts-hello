var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('x:' + this.x);
        console.log('y:' + this.y);
    };
    return Point;
}());
var point = new Point(1, 2);
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
