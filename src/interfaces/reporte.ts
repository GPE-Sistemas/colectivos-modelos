import { ICoordenadas, IGeoJSONPoint } from "../auxiliares";
import { ICliente } from "./cliente";
import { ITracker } from "./tracker";

export interface IReporte {
  _id?: string;
  //
  idCliente?: string;
  idTracker?: string;
  // Datos de traccar

  fecha?: string;
  ubicacion?: ICoordenadas;
  geojson?: IGeoJSONPoint;
  velocidad?: number;

  // Populate
  cliente?: ICliente;
  tracker?: ITracker;
}

type OmitirCreate = "_id" | "cliente" | "tracker";

export interface ICreateReporte extends Omit<Partial<IReporte>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente" | "tracker";

export interface IUpdateReporte extends Omit<Partial<IReporte>, OmitirUpdate> {}
