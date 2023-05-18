import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Article } from './article.entity';



@Entity()
export class ArticleImage {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    url: string;

    @ManyToOne(
        () => Article, 
        (article) => article.images
    )
    article: Article;
}
