import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MIEMBRO_REPOSITORY } from './miembros.tokens.js';
import type { MiembroRepository } from './dominio/miembro.repository.js';
import { CrearMiembroDto } from './dto/crear-miembro.dto.js';
import { ActualizarMiembroDto } from './dto/actualizar-miembro.dto.js';

@Injectable()
export class MiembrosService {
    constructor(
        @Inject(MIEMBRO_REPOSITORY)
        private readonly miembroRepository: MiembroRepository
    ) {}

    async listar() {
        return this.miembroRepository.listar();
    }

    async buscarPorId(id: number) {
        const miembro = await this.miembroRepository.buscarPorId(id);
        if (!miembro) throw new NotFoundException(`Miembro con ID ${id} no encontrado`);
        return miembro;
    }

    async crear(datos: CrearMiembroDto) {
        return this.miembroRepository.crear(datos);
    }

    async actualizar(id: number, datos: ActualizarMiembroDto) {
        const miembro = await this.miembroRepository.actualizar(id, datos);
        if (!miembro) throw new NotFoundException(`Miembro con ID ${id} no encontrado`);
        return miembro;
    }

    async eliminar(id: number) {
        const eliminado = await this.miembroRepository.eliminar(id);
        if (!eliminado) throw new NotFoundException(`Miembro con ID ${id} no encontrado`);
        return { mensaje: `Miembro con ID ${id} eliminado correctamente` };
    }
}