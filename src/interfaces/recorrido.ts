import { ICoordenadas, IGeoJSONLineString } from "../auxiliares";
import { ICliente } from "./cliente";

export interface IParada {
  _id?: string;
  ubicacion?: ICoordenadas;
  nombre?: string;
  direccion?: string;
}

export interface IFranjaHoraria {
  desde?: string;
  hasta?: string;
  frecuenciaMinutos?: number;
}

export interface IRecorrido {
  _id?: string;

  idCliente?: string;
  //
  nombre?: string;
  recorrido?: ICoordenadas[];
  geojson?: IGeoJSONLineString;
  paradas?: IParada[];
  franjaHoraria?: IFranjaHoraria;

  // Populate
  cliente?: ICliente;
}

type OmitirCreate = "_id" | "cliente";

export interface ICreateRecorrido
  extends Omit<Partial<IRecorrido>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente";

export interface IUpdateRecorrido
  extends Omit<Partial<IRecorrido>, OmitirUpdate> {}
