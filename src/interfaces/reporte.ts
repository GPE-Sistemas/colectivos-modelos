import { ICoordenadas, IGeoJSONPoint } from "../auxiliares";
import { ICliente } from "./cliente";
import { IColectivo } from "./colectivo";
import { ITracker } from "./tracker";

export interface IReporte {
  _id?: string;
  //
  idCliente?: string;
  idTracker?: string;
  idColectivo?: string;
  // Datos de traccar
  traccarUniqueId?: string;
  fecha?: string;
  ubicacion?: ICoordenadas;
  geojson?: IGeoJSONPoint;
  velocidad?: number;

  // Populate
  cliente?: ICliente;
  tracker?: ITracker;
  colectivo?: IColectivo;
}

type OmitirCreate = "_id" | "cliente" | "tracker" | "colectivo";

export interface ICreateReporte extends Omit<Partial<IReporte>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente" | "tracker" | "colectivo";

export interface IUpdateReporte extends Omit<Partial<IReporte>, OmitirUpdate> {}
