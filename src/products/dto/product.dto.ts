import { IsString, IsNotEmpty, MinLength, IsNumber, IsArray, IsOptional } from "class-validator";



export class CreateArticleDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    nombre: string;

    @IsNumber()
    @IsNotEmpty()
    @MinLength(2)
    price: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    descripcion: string;

    @IsString({ each: true })
    @IsArray()
    @IsOptional()
    images?: string[];
}