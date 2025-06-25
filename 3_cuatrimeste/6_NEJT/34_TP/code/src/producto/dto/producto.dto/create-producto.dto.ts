import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductoDto {

    @IsOptional()
    @IsInt()
    @Type(()=>Number)//convert
    id?: number;
    
    @IsString()
    @IsNotEmpty()
    marca:string;
    
    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsString()
    @IsNotEmpty()
    descripcion:string;

    @IsNumber()
    precio:number;

    @IsNumber()
    stock:number;
}
