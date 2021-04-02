import { Model } from 'mongoose';
import { Article } from './interfaces/article.interface';
import { CreateArticleDTO } from './dto/article.dto';
export declare class ArticleService {
    private readonly articleModel;
    constructor(articleModel: Model<Article>);
    getArticles(): Promise<Article[]>;
    getArticle(articleID: string): Promise<Article>;
    createArticle(createArticleDTO: CreateArticleDTO): Promise<Article>;
    deleteArticle(productID: string): Promise<Article>;
    updateArticle(productID: string, createArticleDTO: CreateArticleDTO): Promise<Article>;
}
