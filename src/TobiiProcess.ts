import { spawn } from "child_process";
import { EventEmitter } from "tsee";
import { join } from "path";
import { Bound } from "./bound";
import { platform } from "os";

export class TobiiProcess extends EventEmitter<{

    enter: (index: number) => void;
    click: (index: number, count: number) => void;
    exit: () => void
}> {
    private process?: import("child_process").ChildProcessWithoutNullStreams;
    constructor(exe = join(__dirname, '../bin/EyeLog.exe')) {
        super()
        if (platform() == 'win32') {
            this.process = spawn(exe)

            this.process.stdout.on('data', (chunk) => {
                this.onData(chunk.toString())
            })

        }
    }
    setBounds(bounds: Bound[]) {
        this.process?.stdin
            .write(bounds.map((b) => b.toString()).join(';') + '\n')
    }
    setTimeout(value: number) {
        this.process?.stdin
            .write('timeout:' + value + '\n')
    }
    private onData(data: string) {
        data = data.trim()
        if (data.includes('enter')) {
            this.emit('enter', +data.split(':')[1])
        }
        if (data.includes('exit')) {
            this.emit('exit')
        }
        if (data.includes('click')) {
            const args = data.split(':')[1].split(',').map((s => +s))
            this.emit('click', args[0], args[1])
        }
    }

}