"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
function main() {
    app_1.default.listen(app_1.default.get('port'));
    console.log('server on port', app_1.default.get('port'));
}
main();
//# sourceMappingURL=index.js.map