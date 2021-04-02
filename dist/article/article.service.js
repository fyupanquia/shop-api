"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ArticleService = class ArticleService {
    constructor(articleModel) {
        this.articleModel = articleModel;
    }
    async getArticles() {
        const articles = await this.articleModel.find();
        return articles;
    }
    async getArticle(articleID) {
        const article = await this.articleModel.findById(articleID);
        return article;
    }
    async createArticle(createArticleDTO) {
        const article = await new this.articleModel(createArticleDTO);
        return await article.save();
    }
    async deleteArticle(productID) {
        const deletedtArticle = await this.articleModel.findByIdAndDelete(productID);
        return deletedtArticle;
    }
    async updateArticle(productID, createArticleDTO) {
        const deletedtArticle = await this.articleModel.findByIdAndUpdate(productID, createArticleDTO, { new: true });
        return deletedtArticle;
    }
};
ArticleService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('Article')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ArticleService);
exports.ArticleService = ArticleService;
//# sourceMappingURL=article.service.js.map