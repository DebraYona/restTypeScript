"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        lowercase: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});
var Product = mongoose_1.model('Product', ProductSchema);
exports.default = Product;
//# sourceMappingURL=Product.js.map