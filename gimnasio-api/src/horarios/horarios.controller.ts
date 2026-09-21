import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  NotFoundException 
} from '@nestjs/common';
import { HorariosService } from './horarios.service.js';
import { CrearHorarioDto } from './dto/crear-horario.dto.js';
import { ActualizarHorarioDto } from './dto/actualizar-horario.dto.js';


@Controller('horarios')
export class HorariosController {
  constructor(private readonly horariosService: HorariosService) {}

  @Get()
  async listar() {
    return this.horariosService.listar();
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string) {
    const horario = await this.horariosService.buscarPorId(id);
    if (!horario) {
      throw new NotFoundException(`Horario con ID ${id} no encontrado`);
    }
    return horario;
  }

  @Post()
  async crear(@Body() dto: CrearHorarioDto) {
    return this.horariosService.crear(dto);
  }

  @Patch(':id')
  async actualizar(@Param('id') id: string, @Body() dto: ActualizarHorarioDto) {
    const horarioActualizado = await this.horariosService.actualizar(id, dto);
    if (!horarioActualizado) {
      throw new NotFoundException(`Horario con ID ${id} no encontrado para actualizar`);
    }
    return horarioActualizado;
  }

  @Delete(':id')
  async eliminar(@Param('id') id: string) {
    const eliminado = await this.horariosService.eliminar(id);
    if (!eliminado) {
      throw new NotFoundException(`Horario con ID ${id} no encontrado para eliminar`);
    }
    return { mensaje: `Horario con ID ${id} eliminado correctamente` };
  }
}