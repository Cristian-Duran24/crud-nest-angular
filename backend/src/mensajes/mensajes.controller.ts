import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, Res } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto/create-mensaje-dto';
import { MensajesService } from './mensajes.service';
import { response } from 'express';

@Controller('mensajes')
export class MensajesController {
    constructor(private mensajesService: MensajesService) {

    }

    @Post()
    create (@Body() createMensajeDto: CreateMensajeDto, @Res() response) {
        this.mensajesService.createMensaje(createMensajeDto).then( mensaje => {
            response.status(HttpStatus.CREATED).json(mensaje);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Hubo un error al crear'});
        });
    }

    @Get()
    getAll(@Res() response) {
        this.mensajesService.getAll().then( mensajesList => {
            response.status(HttpStatus.OK).json(mensajesList);
        }).catch( () => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Hubo un error al obtener los mensajes'});
        });
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto, @Res() response, @Param('id') idMensaje) {
        this.mensajesService.updateMensaje(idMensaje, updateMensajeDto).then(mensaje => {
            response.status(HttpStatus.OK).json(mensaje);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al editar'});
        });
    }

    @Delete(':id')
    delete(@Res() response, @Param('id') idMensaje) {
        this.mensajesService.deleteMensaje(idMensaje).then(res => {
            response.status(HttpStatus.OK).json(res);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({mensaje: 'Error al eliminar'});
        });
    }

}
