"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("./auth"));
var applyRoutes = function (app) {
    app.use('/user', auth_1.default);
};
exports.default = applyRoutes;
//# sourceMappingURL=index.js.map