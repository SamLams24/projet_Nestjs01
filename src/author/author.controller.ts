import { Controller , Get, Post,  Put, Delete, Param, Body} from '@nestjs/common';
import { AuthorService } from './author.service';
import { Author } from './author.entity';

@Controller('authors')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}

    @Get()
  findAll(): Promise<Author[]> {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Author> {
    return this.authorService.findOne(id);
  }

    @Post()
    createAuthor(@Body() body: Author) {
        return this.authorService.create(body)
    }

    @Put(':id')
  update(@Param('id') id: number, @Body() author: Author): Promise<Author> {
    return this.authorService.update(id, author);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.authorService.remove(id);
  }

}
