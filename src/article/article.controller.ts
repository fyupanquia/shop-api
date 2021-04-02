import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  Query,
  NotFoundException,
} from '@nestjs/common';

import { CreateArticleDTO } from './dto/article.dto';
import { ArticleService } from './article.service';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) {}

  @Get('/')
  async getArticles(@Res() res) {
    const articles = await this.articleService.getArticles();
    return res.status(HttpStatus.OK).json({
      articles,
    });
  }

  @Get('/:articleID')
  async getArticle(@Res() res, @Param('articleID') articleID) {
    const article = await this.articleService.getArticle(articleID);

    if (!article) throw new NotFoundException(`Article doesn't exist`);
    return res.status(HttpStatus.OK).json(article);
  }

  @Post('/create')
  async createArticle(@Res() res, @Body() createArticleDTO: CreateArticleDTO) {
    const article = await this.articleService.createArticle(createArticleDTO);

    return res.status(HttpStatus.CREATED).json({
      message: 'received',
      article,
    });
  }

  @Delete('/') // DELETE /?articleID=
  async deleteArticle(@Res() res, @Query('articleID') articleID) {
    const article = await this.articleService.deleteArticle(articleID);
    if (!article) throw new NotFoundException(`Article doesn't exist`);
    return res.status(HttpStatus.OK).json({
      message: 'Article deleted correctly',
      article,
    });
  }

  @Put('/:articleID')
  async updateArticle(
    @Res() res,
    @Param('articleID') articleID,
    @Body() createdArticleDTO,
  ) {
    const article = await this.articleService.updateArticle(
      articleID,
      createdArticleDTO,
    );
    if (!article) throw new NotFoundException(`Article doesn't exist`);
    return res.status(HttpStatus.OK).json({
      message: 'Article updated correctly',
      article,
    });
  }
}
