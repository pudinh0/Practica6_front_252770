import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClasesService } from './clases.service.js';
import type { CrearClaseDTO } from './dto/crear-clase.dto.js';
import type { ActualizarClaseDTO } from './dto/editar-clase.dto.js';

@Controller('clases')
export class ClasesController {
  constructor(private readonly clasesService: ClasesService) {}

  @Get()
  listar() {
    return this.clasesService.listar();
  }

  @Post()
  @HttpCode(201)
  crear(@Body() cuerpo: CrearClaseDTO) {
    return this.clasesService.crear(cuerpo);
  }

  @Patch(':id')
  async actualizar(@Param('id') id: string, @Body() dto: ActualizarClaseDTO) {
    const clase = await this.clasesService.actualizar(Number(id), dto);

    if (!clase) {
      throw new NotFoundException(`Clase con id ${id} no encontrada`);
    }

    return clase;
  }

  @Delete(':id')
  @HttpCode(204)
  async eliminar(@Param('id') id: string) {
    const clase = await this.clasesService.eliminar(Number(id));
    if (!clase) {
      throw new NotFoundException(`Clase con id ${id} no encontrada`);
    }

    return clase;
  }




}
