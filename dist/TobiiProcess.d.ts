import { EventEmitter } from "tsee";
import { Bound } from "./bound";
export declare class TobiiProcess extends EventEmitter<{
    enter: (index: number) => void;
    click: (index: number, count: number) => void;
    exit: () => void;
}> {
    private process;
    constructor(exe?: string);
    setBounds(bounds: Bound[]): void;
    setTimeout(value: number): void;
    private onData;
}
