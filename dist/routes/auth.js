"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var verifyToken_1 = require("../libs/verifyToken");
var aut_controller_1 = require("../controllers/aut.controller");
router.post('/singup', aut_controller_1.singup);
router.post('/singin', aut_controller_1.singin);
router.get('/profile', verifyToken_1.TokenValidation, aut_controller_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map