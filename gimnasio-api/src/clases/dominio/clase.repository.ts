import { Clase } from "../clases.service.js";
import { CrearClaseDTO } from "../dto/crear-clase.dto.js";
import { ActualizarClaseDTO } from "../dto/editar-clase.dto.js";

export interface ClaseRepository {
    listar(): Promise<Clase[]>;
    buscarPorId(id: number): Promise<Clase | null>;
    crear(datos: CrearClaseDTO): Promise<Clase>;
    actualizar(id: number, datos: ActualizarClaseDTO): Promise<Clase | null>;
    eliminar(id: number): Promise<Clase | null>;
}