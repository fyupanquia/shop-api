import { CreateArticleDTO } from './dto/article.dto';
import { ArticleService } from './article.service';
export declare class ArticleController {
    private articleService;
    constructor(articleService: ArticleService);
    getArticles(res: any): Promise<any>;
    getArticle(res: any, articleID: any): Promise<any>;
    createArticle(res: any, createArticleDTO: CreateArticleDTO): Promise<any>;
    deleteArticle(res: any, articleID: any): Promise<any>;
    updateArticle(res: any, articleID: any, createdArticleDTO: any): Promise<any>;
}
