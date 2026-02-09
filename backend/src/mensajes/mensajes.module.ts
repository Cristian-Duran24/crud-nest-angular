import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MensajesService } from './mensajes.service';
import { MensajesController } from './mensajes.controller';
import { Mensaje } from './entities/mensaje.entity';

@Module({
    // 1. Aquí registramos la Entidad para que este módulo pueda usar el Repositorio
    imports: [TypeOrmModule.forFeature([Mensaje])],

    // 2. Definimos los controladores y servicios de ESTE módulo
    controllers: [MensajesController],
    providers: [MensajesService],
})

export class MensajesModule { }
