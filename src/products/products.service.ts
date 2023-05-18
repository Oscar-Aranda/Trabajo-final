import { Injectable } from "@nestjs/common";
import { Article } from "./entitis/article.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ArticleImage } from "./entitis/article-image.entity";
import { CreateArticleDto } from "./dto/product.dto";




@Injectable()
export class ArticlesService {
    constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository <Article>,

    @InjectRepository(ArticleImage)
        private readonly imageRepository: Repository<ArticleImage>
) {}

async create(articleDto: CreateArticleDto) {
    const { images = [], ... detalleProducto } = articleDto;
    const article = await this.articleRepository.create({
        ...detalleProducto,
        images: images.map((image) => 
            this.imageRepository.create({url: image})),
    });
    await this.articleRepository.save(article);
    return article;
}


    //Metodo para visualizar todos los productos
    findAll() {
        return this.articleRepository.find();
    }

    //Metodo para mostrar un producto especifico
    findOne(id: string) {
        return this.articleRepository.findOneBy({ id });
    }

    async update(id: string, cambios: CreateArticleDto) {
        const article = await this.articleRepository.preload({
            id:id,
            ...cambios,
            images: [],
        });
        await this.articleRepository.save(article);
        return article;
    }
    }