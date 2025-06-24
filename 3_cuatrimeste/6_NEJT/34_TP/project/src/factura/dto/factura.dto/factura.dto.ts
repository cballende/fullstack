import { Type } from "class-transformer";
import { ArrayNotEmpty, ArrayUnique, IsArray, IsDateString, IsInt, IsNumber, IsOptional } from "class-validator";

export class FacturaDto {
    @IsOptional()
    @IsInt()
    @Type(()=>Number)//convert
    id?: number;

    @IsDateString()
    fecha:Date;

    @IsNumber()
    total_sin_iva:number;

    @IsNumber()
    iva:number;

    @IsNumber()
    total_con_iva:number;

    @IsNumber()
    nro_cliente:number;
    
    
    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    productos:number[];
    
    @IsArray()
    @ArrayNotEmpty()
    cantidad:number[];
}
