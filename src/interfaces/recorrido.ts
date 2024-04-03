import { ICoordenadas, IGeoJSONLineString, IGeoJSONPoint } from "../auxiliares";
import { ICliente } from "./cliente";
import { ILinea } from "./linea";

export interface IParada {
  _id?: string;
  ubicacion?: ICoordenadas;
  geojson?: IGeoJSONPoint;
  nombre?: string;
  direccion?: string;
  destino?: string;
}

export interface IFranjaHoraria {
  dia?: number; // Número de 0 a 6, siendo 0 el domingo
  desde?: string;
  hasta?: string;
  frecuenciaMinutos?: number;
}

export interface IRecorrido {
  _id?: string;

  idCliente?: string;
  idLinea?: string;
  //
  nombre?: string;
  recorrido?: ICoordenadas[];
  geojson?: IGeoJSONLineString;
  paradas?: IParada[];
  franjaHoraria?: IFranjaHoraria[];

  // Populate
  cliente?: ICliente;
  linea?: ILinea;
}

type OmitirCreate = "_id" | "cliente";

export interface ICreateRecorrido
  extends Omit<Partial<IRecorrido>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente";

export interface IUpdateRecorrido
  extends Omit<Partial<IRecorrido>, OmitirUpdate> {}
