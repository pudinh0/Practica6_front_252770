import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { MiembrosService } from './miembros.service.js';
import { CrearMiembroDto } from './dto/crear-miembro.dto.js';
import { ActualizarMiembroDto } from './dto/actualizar-miembro.dto.js';

@Controller('miembros')
export class MiembrosController {
    constructor(private readonly miembrosService: MiembrosService) {}

    @Get()
    listar() {
        return this.miembrosService.listar();
    }

    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id: number) {
        return this.miembrosService.buscarPorId(id);
    }

    @Post()
    crear(@Body() datos: CrearMiembroDto) {
        return this.miembrosService.crear(datos);
    }

    @Put(':id')
    actualizar(@Param('id', ParseIntPipe) id: number, @Body() datos: ActualizarMiembroDto) {
        return this.miembrosService.actualizar(id, datos);
    }

    @Delete(':id')
    eliminar(@Param('id', ParseIntPipe) id: number) {
        return this.miembrosService.eliminar(id);
    }
}