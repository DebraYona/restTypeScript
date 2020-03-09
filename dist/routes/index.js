"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("./auth"));
var shop_1 = __importDefault(require("./shop"));
var applyRoutes = function (app) {
    app.use('/user', auth_1.default);
    app.use('/shop', shop_1.default);
};
exports.default = applyRoutes;
//# sourceMappingURL=index.js.map