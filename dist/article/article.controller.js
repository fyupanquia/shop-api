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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const article_dto_1 = require("./dto/article.dto");
const article_service_1 = require("./article.service");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async getArticles(res) {
        const articles = await this.articleService.getArticles();
        return res.status(common_1.HttpStatus.OK).json({
            articles,
        });
    }
    async getArticle(res, articleID) {
        const article = await this.articleService.getArticle(articleID);
        if (!article)
            throw new common_1.NotFoundException(`Article doesn't exist`);
        return res.status(common_1.HttpStatus.OK).json(article);
    }
    async createArticle(res, createArticleDTO) {
        const article = await this.articleService.createArticle(createArticleDTO);
        return res.status(common_1.HttpStatus.CREATED).json({
            message: 'received',
            article,
        });
    }
    async deleteArticle(res, articleID) {
        const article = await this.articleService.deleteArticle(articleID);
        if (!article)
            throw new common_1.NotFoundException(`Article doesn't exist`);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Article deleted correctly',
            article,
        });
    }
    async updateArticle(res, articleID, createdArticleDTO) {
        const article = await this.articleService.updateArticle(articleID, createdArticleDTO);
        if (!article)
            throw new common_1.NotFoundException(`Article doesn't exist`);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Article updated correctly',
            article,
        });
    }
};
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticles", null);
__decorate([
    common_1.Get('/:articleID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('articleID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticle", null);
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, article_dto_1.CreateArticleDTO]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "createArticle", null);
__decorate([
    common_1.Delete('/'),
    __param(0, common_1.Res()), __param(1, common_1.Query('articleID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "deleteArticle", null);
__decorate([
    common_1.Put('/:articleID'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('articleID')),
    __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "updateArticle", null);
ArticleController = __decorate([
    common_1.Controller('article'),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map