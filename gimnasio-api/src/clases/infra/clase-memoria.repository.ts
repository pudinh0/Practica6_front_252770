import { Injectable} from '@nestjs/common';
import { ClaseRepository } from '../dominio/clase.repository.js';
import { Clase} from '../dominio/entidades.js';

@Injectable()
export class ClaseMemoriaRepository implements ClaseRepository {
    private clases: Clase[] = [
        {id: 1, nombre: 'Clase de Yoga'},
        {id: 2, nombre: 'Clase de Spinning'}
    ];

    private siguienteId: number = 3;

    async listar(): Promise<Clase[]> {
        return this.clases;
    }

    buscarPorId(id: number): Promise<Clase | null> {
        const clase = this.clases.find(clase => clase.id === id);
        return Promise.resolve(clase || null);
    }

    async crear(datos: { nombre: string }): Promise<Clase> {
        const nuevaClase: Clase = {
            id: this.siguienteId++,
            nombre: datos.nombre
        };
        this.clases.push(nuevaClase);
        return nuevaClase;
    }

    async actualizar(id: number, datos: { nombre: string }): Promise<Clase | null> {
        const claseIndex = this.clases.findIndex(clase => clase.id === id);
       if(!claseIndex) return null;

       if(datos.nombre !== undefined) {
        this.clases[claseIndex].nombre = datos.nombre;
       }

       return this.clases[claseIndex];
    }

    async eliminar(id: number): Promise<Clase | null> {
        const claseIndex = this.clases.findIndex(clase => clase.id === id);
        if (claseIndex === -1) {
            return null;
        }
        const claseEliminada = this.clases[claseIndex];
        this.clases.splice(claseIndex, 1);
        return claseEliminada;
    }


}