import { ICliente } from './cliente';
import { IColectivo } from './colectivo';
import { IReporte } from './reporte';

export interface ITraccarDevice {
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
}

export interface ITracker {
  _id?: string;
  //
  idCliente?: string;
  nombre?: string;
  identificacion?: string;
  asignadoA?: string;
  uniqueId?: string;

  traccar?: ITraccarDevice;

  // Populate
  cliente?: ICliente;
  colectivo?: IColectivo;
}

type OmitirCreate = '_id' | 'cliente' | 'colectivo';

export interface ICreateTracker extends Omit<Partial<ITracker>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'cliente' | 'colectivo';

export interface IUpdateTracker extends Omit<Partial<ITracker>, OmitirUpdate> {}
