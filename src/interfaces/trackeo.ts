import { ICliente } from "./cliente";

export interface ITrakeo {
  _id?: string;
  //
  idCliente?: string;
  idColectivo?: string;

  fecha?: string;
  idParada?: string;
  fechaProximaParada?: string;
  idProximaParada?: string;

  // Populate
  cliente?: ICliente;
}

type OmitirCreate = "_id" | "cliente";

export interface ICreateTrakeo extends Omit<Partial<ITrakeo>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente";

export interface IUpdateTrakeo extends Omit<Partial<ITrakeo>, OmitirUpdate> {}
