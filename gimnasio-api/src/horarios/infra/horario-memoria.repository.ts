import { Injectable } from '@nestjs/common';
import { Horario } from '../dominio/entidades.js';
import { HorarioRepository } from '../dominio/horario.repository.js';
import { CrearHorarioDto } from '../dto/crear-horario.dto.js';
import { ActualizarHorarioDto } from '../dto/actualizar-horario.dto.js';


@Injectable()
export class HorarioMemoriaRepository implements HorarioRepository {
  private horarios: Horario[] = [
    {
      id: '1',
      claseId: '101',
      dia: 'Lunes',
      horaInicio: '08:00',
      cupoMaximo: 20,
      entrenador: 'Carlos Santana',
    },
    {
      id: '2',
      claseId: '102',
      dia: 'Miércoles',
      horaInicio: '10:00',
      cupoMaximo: 15,
      entrenador: 'María López',
    },
    {
      id: '3',
      claseId: '103',
      dia: 'Viernes',
      horaInicio: '18:00',
      cupoMaximo: 25,
      entrenador: 'Juan Pérez',
    },
  ];

  private siguienteId: number = 4;

  async listar(): Promise<Horario[]> {
    return this.horarios;
  }

  async buscarPorId(id: string): Promise<Horario | null> {
    const horario = this.horarios.find((h) => h.id === id);
    return horario || null;
  }

  async crear(dto: CrearHorarioDto): Promise<Horario> {
    const nuevoHorario: Horario = {
      id: String(this.siguienteId++),
      ...dto,
    };
    this.horarios.push(nuevoHorario);
    return nuevoHorario;
  }

  async actualizar(
    id: string,
    dto: ActualizarHorarioDto,
  ): Promise<Horario | null> {
    const index = this.horarios.findIndex((h) => h.id === id);
    if (index === -1) return null;

    this.horarios[index] = {
      ...this.horarios[index],
      ...dto,
    };

    return this.horarios[index];
  }

  async eliminar(id: string): Promise<boolean> {
    const index = this.horarios.findIndex((h) => h.id === id);
    if (index === -1) return false;

    this.horarios.splice(index, 1);
    return true;
  }
}
