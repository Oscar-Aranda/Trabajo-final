import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Patch } from "@nestjs/common";
import { ArticlesService } from "./products.service";
import { CreateArticleDto } from "./dto/product.dto";





@Controller('article')
export class ArticleController {
    constructor (private readonly articlesServiceRepo: ArticlesService) {}

    //Metodo para crear un producto
    @Post()
    create(@Body() articleDto: CreateArticleDto) {
        return this.articlesServiceRepo.create(articleDto);
    }
    
    //Metodo para mostrar todos los productos
    @Get()
    findAll() {
        return this.articlesServiceRepo.findAll();
    }

    //Metodo para mostrar un producto en especifico
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.articlesServiceRepo.findOne(id);
    }

    //Crear método patch, para actualizar
    @Patch(':id')
    update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateArticleDto: CreateArticleDto,
    ) {
        return this.articlesServiceRepo.update(id, updateArticleDto);
    }
}