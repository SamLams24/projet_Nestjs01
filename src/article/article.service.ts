import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>
    ) {}

    create(article: Article): Promise<Article> {
        return this.articleRepository.save(article)
    }

    findAll(): Promise<Article[]> {
        return this.articleRepository.find()
    }

    findOne(id: number): Promise<Article> {
        return this.articleRepository.findOne({ where: { id } });
      }

      async update(id: number, article: Article): Promise<Article> {
        await this.articleRepository.update(id, article);
        return this.findOne(id);
      }

      async remove(id: number): Promise<void> {
        await this.articleRepository.delete(id);
      }

}
