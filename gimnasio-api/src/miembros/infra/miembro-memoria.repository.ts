import { Injectable } from '@nestjs/common';
import { MiembroRepository } from '../dominio/miembro.repository.js';
import { Miembro } from '../dominio/entidades.js';
import { CrearMiembroDto } from '../dto/crear-miembro.dto.js';
import { ActualizarMiembroDto } from '../dto/actualizar-miembro.dto.js';

@Injectable()
export class MiembroMemoriaRepository implements MiembroRepository {
    private miembros: Miembro[] = [
        { id: 1, nombre: 'Adel Méndez', correo: 'adel.mendez@gmail.com', membresia: 'Mensual', activo: true },
        { id: 2, nombre: 'Norma Beltrán', correo: 'norma.beltran@gmail.com', membresia: 'Anual', activo: true },
        { id: 3, nombre: 'Popusa Lizo', correo: 'popusa.lizo@gmail.com', membresia: 'Mensual', activo: false }
    ];
    private siguienteId = 4;

    async listar(): Promise<Miembro[]> {
        return this.miembros;
    }

    async buscarPorId(id: number): Promise<Miembro | null> {
        return this.miembros.find(m => m.id === id) || null;
    }

    async crear(datos: CrearMiembroDto): Promise<Miembro> {
        const nuevoMiembro: Miembro = {
            id: this.siguienteId++,
            ...datos,
            activo: true 
        };
        this.miembros.push(nuevoMiembro);
        return nuevoMiembro;
    }

    async actualizar(id: number, datos: ActualizarMiembroDto): Promise<Miembro | null> {
        const index = this.miembros.findIndex(m => m.id === id);
        if (index === -1) return null;
        
        this.miembros[index] = { ...this.miembros[index], ...datos };
        return this.miembros[index];
    }

    async eliminar(id: number): Promise<boolean> {
        const index = this.miembros.findIndex(m => m.id === id);
        if (index === -1) return false;
        
        this.miembros.splice(index, 1);
        return true;
    }
}