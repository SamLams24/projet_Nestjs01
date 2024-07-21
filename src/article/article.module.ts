import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { ArticleController } from './article.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article]), 
  ],
  providers: [ArticleService],
  controllers: [ArticleController]
})
export class ArticleModule {}
