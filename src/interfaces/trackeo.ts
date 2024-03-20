import { ICliente } from "./cliente";
import { IColectivo } from "./colectivo";
import { IRecorrido } from "./recorrido";

export interface ITrackeo {
  _id?: string;
  //
  idCliente?: string;
  idRecorrido?: string;
  idColectivo?: string;

  fecha?: string;
  idParada?: string;
  fechaProximaParada?: string;
  idProximaParada?: string;

  // Populate
  cliente?: ICliente;
  colectivo?: IColectivo;
  recorrido?: IRecorrido;
}

type OmitirCreate = "_id" | "cliente";

export interface ICreateTrackeo extends Omit<Partial<ITrackeo>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente";

export interface IUpdateTrackeo extends Omit<Partial<ITrackeo>, OmitirUpdate> {}
