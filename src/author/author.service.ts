import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>

    ) {}

    create(author: Author): Promise<Author> {
        return this.authorRepository.save(author)

    }

    findAll(): Promise<Author[]> {
        return this.authorRepository.find({ relations: ['articles'] })
        
    }

    findOne(id: number): Promise<Author> {
        return this.authorRepository.findOne({ where: { id }, relations: ['articles'] });
      }

      async update(id: number, author: Author): Promise<Author> {
        await this.authorRepository.update(id, author);
        return this.findOne(id);
      }

      async remove(id: number): Promise<void> {
        await this.authorRepository.delete(id);
      }
}
