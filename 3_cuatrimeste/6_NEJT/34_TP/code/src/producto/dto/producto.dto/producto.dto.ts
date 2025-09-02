import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductoDto {
    @IsNumber()
    id?:number;
    
    @Expose()
    @IsString()
    @IsNotEmpty()
    marca:string;

    @Expose()    
    @IsString()
    @IsNotEmpty()
    nombre:string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    descripcion:string;
    @Expose()
    @IsNumber()
    precio:number;
    
    @Expose()
    @IsNumber()
    stock:number;
}
