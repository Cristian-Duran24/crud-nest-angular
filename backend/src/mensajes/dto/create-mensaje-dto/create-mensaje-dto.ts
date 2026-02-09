import { IsString, IsNotEmpty } from 'class-validator'; // <--- Importante

export class CreateMensajeDto {
    @IsString()
    @IsNotEmpty()
    readonly nickname: string;

    @IsString()
    @IsNotEmpty()
    readonly mensaje: string;
}