"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var body_parser_1 = __importDefault(require("body-parser"));
//import appliRoutes from './routes/index'
var index_1 = __importDefault(require("./routes/index"));
var app = express_1.default();
//setting
app.set('port', 4000);
//middlewares
app.use(body_parser_1.default.json());
app.use(morgan_1.default('dev'));
//routes
index_1.default(app);
//app.use(appliRoutes)
exports.default = app;
//# sourceMappingURL=app.js.map