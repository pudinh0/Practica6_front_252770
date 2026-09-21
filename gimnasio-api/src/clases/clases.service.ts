import { Inject, Injectable } from '@nestjs/common';
import type { ClaseRepository } from './dominio/clase.repository.js';
import { ClaseMemoriaRepository } from './infra/clase-memoria.repository.js';
import { CLASE_REPOSITORY } from './clases.token.js';
import { CrearClaseDTO } from './dto/crear-clase.dto.js';

export interface Clase{
  id: number;
  nombre: string;
}



@Injectable()
export class ClasesService { 
    constructor(
      @Inject(CLASE_REPOSITORY)
      private readonly repo: ClaseRepository){
      }

      listar(): Promise<Clase[]>{
        return this.repo.listar();
      }
      buscarPorId(id: number): Promise<Clase | null>{
        return this.repo.buscarPorId(id);
      }

      crear(dtos: CrearClaseDTO): Promise<Clase>{
        return this.repo.crear(dtos);
      }

      actualizar(id: number, dtos: CrearClaseDTO): Promise<Clase | null>{
        return this.repo.actualizar(id, dtos);
      }
      eliminar(id: number): Promise<Clase | null>{
        return this.repo.eliminar(id);
      }


}


