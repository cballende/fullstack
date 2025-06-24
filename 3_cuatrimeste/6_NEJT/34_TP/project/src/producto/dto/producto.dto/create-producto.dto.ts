import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProductoDto {

    @IsNumber()
    id?:number;
    
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
