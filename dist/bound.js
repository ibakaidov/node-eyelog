"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bound = void 0;
class Bound {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    static fromArray(array) {
        return new Bound(array[0], array[1], array[2], array[3]);
    }
    toString() {
        return [this.x, this.y, this.width, this.height].join(',');
    }
}
exports.Bound = Bound;
