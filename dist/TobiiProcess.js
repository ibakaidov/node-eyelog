"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TobiiProcess = void 0;
const child_process_1 = require("child_process");
const tsee_1 = require("tsee");
const path_1 = require("path");
const os_1 = require("os");
class TobiiProcess extends tsee_1.EventEmitter {
    constructor(exe = (0, path_1.join)(__dirname, '../bin/EyeLog.exe')) {
        super();
        if ((0, os_1.platform)() == 'win32') {
            this.process = (0, child_process_1.spawn)(exe);
            this.process.stdout.on('data', (chunk) => {
                this.onData(chunk.toString());
            });
        }
    }
    setBounds(bounds) {
        this.process?.stdin
            .write(bounds.map((b) => b.toString()).join(';') + '\n');
    }
    setTimeout(value) {
        this.process?.stdin
            .write('timeout:' + value + '\n');
    }
    onData(data) {
        data = data.trim();
        if (data.includes('enter')) {
            this.emit('enter', +data.split(':')[1]);
        }
        if (data.includes('exit')) {
            this.emit('exit');
        }
        if (data.includes('click')) {
            const args = data.split(':')[1].split(',').map((s => +s));
            this.emit('click', args[0], args[1]);
        }
    }
}
exports.TobiiProcess = TobiiProcess;
