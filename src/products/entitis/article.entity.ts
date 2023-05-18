import {Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm'
import { ArticleImage } from './article-image.entity';

@Entity()
export class Article {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'text'})
    nombre: string;

    @Column({type: 'numeric'})
    precio: number;

    @Column({type: 'text'})
    descripcion: string;
    

    @OneToMany(
        () => ArticleImage,
        (articleImage) => articleImage.article,
        {cascade: true,}
    )
    images?: ArticleImage[];
}