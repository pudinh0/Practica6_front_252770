import { ActualizarHorarioDto } from "../dto/actualizar-horario.dto.js";
import { CrearHorarioDto } from "../dto/crear-horario.dto.js";
import { Horario } from "./entidades.js";


export interface HorarioRepository {
  listar(): Promise<Horario[]>;
  buscarPorId(id: string): Promise<Horario | null>;
  crear(dto: CrearHorarioDto): Promise<Horario>;
  actualizar(id: string, dto: ActualizarHorarioDto): Promise<Horario | null>;
  eliminar(id: string): Promise<boolean>;
}