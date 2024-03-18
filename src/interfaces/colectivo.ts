import { ICliente } from "./cliente";
import { IRecorrido } from "./recorrido";
import { ITracker } from "./tracker";

export interface IColectivo {
  _id?: string;
  //
  idCliente?: string;
  idRecorrido?: string;
  idTracker?: string;
  //
  identificacion?: string;
  patente?: string;
  estado?: "Operativo" | "En mantenimiento" | "Fuera de servicio";

  // Populate
  cliente?: ICliente;
  recorrido?: IRecorrido;
  tracker?: ITracker;
}

type OmitirCreate = "_id" | "cliente" | "recorrido" | "tracker";

export interface ICreateColectivo
  extends Omit<Partial<IColectivo>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente" | "recorrido" | "tracker";

export interface IUpdateColectivo
  extends Omit<Partial<IColectivo>, OmitirUpdate> {}
