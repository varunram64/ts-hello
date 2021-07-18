var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('x:' + this.x);
        console.log('y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //....
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
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
