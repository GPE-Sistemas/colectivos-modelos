import { ICliente } from "./cliente";
import { IColectivo } from "./colectivo";
import { IParada, IRecorrido } from "./recorrido";

export interface ITrackeo {
  _id?: string;
  //
  idCliente?: string;
  idLinea?: string;
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
  parada?: IParada;
  proximaParada?: IParada;
}

type OmitirCreate =
  | "_id"
  | "cliente"
  | "colectivo"
  | "recorrido"
  | "parada"
  | "proximaParada";

export interface ICreateTrackeo extends Omit<Partial<ITrackeo>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "cliente"
  | "colectivo"
  | "recorrido"
  | "parada"
  | "proximaParada";

export interface IUpdateTrackeo extends Omit<Partial<ITrackeo>, OmitirUpdate> {}
