import { ICliente } from "./cliente";

export interface ILinea {
  _id?: string;

  idCliente?: string;
  //
  nombre?: string;

  // Populate
  cliente?: ICliente;
}

type OmitirCreate = "_id" | "cliente";

export interface ICreateLinea extends Omit<Partial<ILinea>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente";

export interface IUpdateLinea extends Omit<Partial<ILinea>, OmitirUpdate> {}
