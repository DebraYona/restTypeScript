"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
var shop_controller_1 = require("../controllers/shop.controller");
//router.get('/', shop);
router.get('/:page', shop_controller_1.products);
router.post('/', shop_controller_1.addProducts);
exports.default = router;
//# sourceMappingURL=shop.js.map