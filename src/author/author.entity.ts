import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Article } from '../article/article.entity';

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    username: string

    @Column({
        nullable: true,
    })
    avatarURL: string

    @OneToMany(() => Article, (article) => article.author)
    articles: Article[]

}
