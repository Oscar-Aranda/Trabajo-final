import { Injectable, BadRequestException } from '@nestjs/common';
import { existsSync } from 'fs';
import { join } from 'path';

@Injectable()
export class Routersservices {
    staticProfuctImage(imagename: string)  {
        const path = join( __dirname, '../../static/products', imagename);

        if(!existsSync(path)){
            throw new BadRequestException(`No se encuentrra el producto con la imagen ${imagename}`
                );
        }

        return path;
    }
}
