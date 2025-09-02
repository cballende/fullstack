import { Expose } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserDto {  
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    id: string;
    
    @Expose()
    username: string;

    @Expose()
    @IsEmail()
    email: string;

    @Expose()
    fullname?: string;

    @Expose()
    phone?: string;
    createdAt: Date;
    updatedAt: Date;
}
