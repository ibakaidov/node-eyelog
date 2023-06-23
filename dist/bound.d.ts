export declare class Bound {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number);
    static fromArray(array: number[]): Bound;
    toString(): string;
}
