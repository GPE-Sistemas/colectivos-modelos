import { ICliente } from "./cliente";

export interface IApikey {
  _id?: string;
  //
  identificacion?: string;

  // Permisos
  global?: boolean;
  idClientes?: string[];

  // Virtuals
  clientes?: ICliente[];
}

type OmitirCreate = "_id" | "clientes";

export interface ICreateApikey extends Omit<Partial<IApikey>, OmitirCreate> {}

type OmitirUpdate = "_id" | "clientes";

export interface IUpdateApikey extends Omit<Partial<IApikey>, OmitirUpdate> {}
