"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.TokenValidation = function (req, res, next) {
    var token = req.header('auth-token');
    if (!token)
        return res.status(401).json('Acceso denied');
    var payload = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET || 'tok');
    req.userId = payload._id;
    next();
};
//# sourceMappingURL=verifyToken.js.map