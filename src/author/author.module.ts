import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './author.entity'; 
import { AuthorController } from './author.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Author]),
  ],
  providers: [AuthorService],
  controllers: [AuthorController]
})
export class AuthorModule {}
