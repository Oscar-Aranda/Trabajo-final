import { Controller, Res, Param, Get, UseInterceptors, Post, UploadedFile, BadRequestException} from "@nestjs/common";
import { fileFilter } from "./herlpers/filefilter.helper";
import { fileNamer } from "./herlpers/fileNamer.herlper";
import { Response } from 'express';
import { Routersservices } from "./files.service";
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('routers')
export class RoutersController {
    constructor( private readonly routersservices: Routersservices) {}

    @Get('article/:imagename')
    findArticle(
        @Res() res: Response,
        @Param('imagename') imagename: string) {
        const path = this .routersservices.staticProfuctImage(imagename)

        res.sendFile(path)
        }

        @Post('article')
        @UseInterceptors(
            FileInterceptor('router', {
            fileFilter: fileFilter,
            storage: diskStorage({
                destination: './static/articles',
                filename: fileNamer,
            }),
        }),
        )

        uploadProductImage(@UploadedFile() file: Express.Multer.File) {
            if (!file) {
                throw new BadRequestException('Asegurese que el archico sea una imagen')
            }
            
            const getUrl = `${file.filename}`;
        
            return getUrl;
            } 

}