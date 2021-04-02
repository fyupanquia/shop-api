import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './interfaces/article.interface';
import { CreateArticleDTO } from './dto/article.dto';
@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private readonly articleModel: Model<Article>,
  ) {}

  async getArticles(): Promise<Article[]> {
    const articles = await this.articleModel.find();
    return articles;
  }

  async getArticle(articleID: string): Promise<Article> {
    const article = await this.articleModel.findById(articleID);
    return article;
  }

  async createArticle(createArticleDTO: CreateArticleDTO): Promise<Article> {
    const article = await new this.articleModel(createArticleDTO);
    return await article.save();
  }
  async deleteArticle(productID: string): Promise<Article> {
    const deletedtArticle = await this.articleModel.findByIdAndDelete(
      productID,
    );
    return deletedtArticle;
  }
  async updateArticle(
    productID: string,
    createArticleDTO: CreateArticleDTO,
  ): Promise<Article> {
    const deletedtArticle = await this.articleModel.findByIdAndUpdate(
      productID,
      createArticleDTO,
      { new: true },
    );
    return deletedtArticle;
  }
}
