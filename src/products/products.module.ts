import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from "./entitis/article.entity";
import { ArticleImage } from "./entitis/article-image.entity";
import { ArticleController } from "./products.controller";
import { ArticlesService } from "./products.service";



@Module({
    imports: [TypeOrmModule.forFeature([Article, ArticleImage])],
    controllers: [
        ArticleController
    ],
    providers: [ArticlesService],
})





export class ArticleModule{}