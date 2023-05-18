import { Module } from '@nestjs/common';
import { RoutersController } from './files.controlles';
import { Routersservices } from './files.service';

@Module({
    controllers: [RoutersController],
    providers: [Routersservices]
    })
export class FilesModule {}
