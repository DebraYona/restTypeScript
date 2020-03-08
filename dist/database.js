"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(function (db) { return console.log("database is connected"); })
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=database.js.map