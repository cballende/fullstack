import { ArrayNotEmpty, ArrayUnique, IsArray, IsDateString, IsNumber } from "class-validator";
import { CreateFacturaDto } from "./create-factura.dto";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateFacturaDto extends PartialType(CreateFacturaDto) {}
