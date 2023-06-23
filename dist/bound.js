"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bound = void 0;
var Bound = /** @class */ (function () {
    function Bound(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    Bound.fromArray = function (array) {
        return new Bound(array[0], array[1], array[2], array[3]);
    };
    Bound.prototype.toString = function () {
        return [this.x, this.y, this.width, this.height].join(',');
    };
    return Bound;
}());
exports.Bound = Bound;
