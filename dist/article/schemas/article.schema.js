"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ArticleSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    imageURL: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
//# sourceMappingURL=article.schema.js.map