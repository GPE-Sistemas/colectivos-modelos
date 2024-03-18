import { ICliente } from "./cliente";

export type Rol = "Administrador" | "Operador";

export interface IDatosPersonales {
  nombre?: string;
  dni?: string;
  sexo?: boolean;
  email?: string;
  direccion?: string;
  pais?: string;
  telefono?: string;
  fechaNacimiento?: string;
}

export interface IUsuario {
  _id?: string;

  idCliente?: string;
  activo?: boolean;
  fechaCreacion?: string;
  roles?: Rol[];
  usuario?: string;
  hash?: string;

  datosPersonales?: IDatosPersonales;

  // Virtuals
  cliente?: ICliente;
}
