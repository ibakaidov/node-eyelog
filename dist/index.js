"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("console");
var TobiiProcess_1 = require("./TobiiProcess");
var bound_1 = require("./bound");
var p = new TobiiProcess_1.TobiiProcess;
p.setBounds([new bound_1.Bound(0, 0, 960, 1080), new bound_1.Bound(960, 0, 1920, 1080)]);
p.setTimeout(300);
p.on('click', console_1.log);
