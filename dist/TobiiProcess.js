"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TobiiProcess = void 0;
var child_process_1 = require("child_process");
var tsee_1 = require("tsee");
var path_1 = require("path");
var os_1 = require("os");
var TobiiProcess = /** @class */ (function (_super) {
    __extends(TobiiProcess, _super);
    function TobiiProcess(exe) {
        if (exe === void 0) { exe = (0, path_1.join)(__dirname, '../bin/EyeLog.exe'); }
        var _this = _super.call(this) || this;
        if ((0, os_1.platform)() == 'win32') {
            _this.process = (0, child_process_1.spawn)(exe);
            _this.process.stdout.on('data', function (chunk) {
                _this.onData(chunk.toString());
            });
        }
        return _this;
    }
    TobiiProcess.prototype.setBounds = function (bounds) {
        var _a;
        (_a = this.process) === null || _a === void 0 ? void 0 : _a.stdin.write(bounds.map(function (b) { return b.toString(); }).join(';') + '\n');
    };
    TobiiProcess.prototype.setTimeout = function (value) {
        var _a;
        (_a = this.process) === null || _a === void 0 ? void 0 : _a.stdin.write('timeout:' + value + '\n');
    };
    TobiiProcess.prototype.onData = function (data) {
        data = data.trim();
        if (data.includes('enter')) {
            this.emit('enter', +data.split(':')[1]);
        }
        if (data.includes('exit')) {
            this.emit('exit');
        }
        if (data.includes('click')) {
            var args = data.split(':')[1].split(',').map((function (s) { return +s; }));
            this.emit('click', args[0], args[1]);
        }
    };
    return TobiiProcess;
}(tsee_1.EventEmitter));
exports.TobiiProcess = TobiiProcess;
