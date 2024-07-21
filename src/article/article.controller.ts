import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';

@Controller('articles')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get()
    getArticles() {
        return this.articleService.findAll()
    }

    @Post()
    createArticle(@Body() body: Article) {
        return this.articleService.create(body)
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Article> {
        return this.articleService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() article: Article): Promise<Article> {
    return this.articleService.update(id, article);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.articleService.remove(id);
  }
  
}
