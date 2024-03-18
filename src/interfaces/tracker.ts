import { ICliente } from "./cliente";

export interface ITracker {
  _id?: string;
  //
  idCliente?: string;
  // Datos de traccar
  id?: number;
  name?: string;
  uniqueId?: string;
  status?: string;
  disabled?: true;
  lastUpdate?: string;
  positionId?: number;
  groupId?: number;
  phone?: string;
  model?: string;
  contact?: string;
  category?: string;
  attributes?: object;

  // Populate
  cliente?: ICliente;
}

type OmitirCreate = "_id" | "cliente";

export interface ICreateTracker extends Omit<Partial<ITracker>, OmitirCreate> {}

type OmitirUpdate = "_id" | "cliente";

export interface IUpdateTracker extends Omit<Partial<ITracker>, OmitirUpdate> {}
