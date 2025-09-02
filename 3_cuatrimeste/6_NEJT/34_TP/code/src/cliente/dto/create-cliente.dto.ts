import { IsInt, IsOptional, IsString, MaxLength, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { Expose } from "class-transformer";

export class CreateClienteDto {

  @IsOptional()
  @IsInt()
  @Type(()=>Number)//convert
  id?: number;
      
  @Expose()
  @IsString()
  @MaxLength(45)
  nombre: string;

  @Expose()
  @IsString()
  @MaxLength(45)
  apellido: string;

  @Expose()
  @IsString()
  @MaxLength(45) 
  direccion: string;

  @IsInt()
  @Min(0)
  @Max(999)
  @Type(()=>Number)
  activo: number;


}
