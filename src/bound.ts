export class Bound {
    x: number
    y: number
    width: number
    height: number
    constructor(x: number, y: number, width: number, height: number){
        this.x=x;
        this.y=y;
        this.width = width;
        this.height  = height
    }
    static fromArray(array: number[]){
        return new Bound(array[0], array[1], array[2], array[3])
    }
    toString(){
        return [this.x, this.y, this.width, this.height].join(',')
    }
}