import { Inject, Injectable } from '@nestjs/common';
import { HORARIO_REPOSITORY } from './horarios.tokens.js';
import type { HorarioRepository } from './dominio/horario.repository.js';
import { Horario } from './dominio/entidades.js';
import { CrearHorarioDto } from './dto/crear-horario.dto.js';
import { ActualizarHorarioDto } from './dto/actualizar-horario.dto.js';

@Injectable()
export class HorariosService {
  constructor(
    @Inject(HORARIO_REPOSITORY)
    private readonly horarioRepository: HorarioRepository,
  ) {}

  async listar(): Promise<Horario[]> {
    return this.horarioRepository.listar();
  }

  async buscarPorId(id: string): Promise<Horario | null> {
    return this.horarioRepository.buscarPorId(id);
  }

  async crear(dto: CrearHorarioDto): Promise<Horario> {
    return this.horarioRepository.crear(dto);
  }

  async actualizar(id: string, dto: ActualizarHorarioDto): Promise<Horario | null> {
    return this.horarioRepository.actualizar(id, dto);
  }

  async eliminar(id: string): Promise<boolean> {
    return this.horarioRepository.eliminar(id);
  }
}