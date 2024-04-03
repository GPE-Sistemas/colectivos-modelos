import { ICliente } from "./cliente";
import { ILinea } from "./linea";
import { IRecorrido } from "./recorrido";
import { ITracker } from "./tracker";

export interface IColectivo {
  _id?: string;
  //
  idCliente?: string;
  idLinea?: string;
  idRecorrido?: string;
  idUnicoTraccar?: string;
  //
  identificacion?: string;
  patente?: string;
  estado?: "Operativo" | "En mantenimiento" | "Fuera de servicio";

  // Populate
  cliente?: ICliente;
  linea?: ILinea;
  recorrido?: IRecorrido;
  tracker?: ITracker;
}

type OmitirCreate = "_id" | "cliente" | "recorrido" | "tracker";

export interface ICreateColectivo
  extends Omit<Partial<IColectivo>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente" | "recorrido" | "tracker";

export interface IUpdateColectivo
  extends Omit<Partial<IColectivo>, OmitirUpdate> {}
