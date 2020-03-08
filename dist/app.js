"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = __importDefault(require("./routes/auth"));
var app = express_1.default();
//setting
app.set('port', 4000);
//routes
app.use(auth_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map