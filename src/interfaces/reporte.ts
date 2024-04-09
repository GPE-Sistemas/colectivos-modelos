import { ICoordenadas, IGeoJSONPoint } from '../auxiliares';
import { ICliente } from './cliente';
import { IColectivo } from './colectivo';
import { ILinea } from './linea';
import { IRecorrido } from './recorrido';
import { ITracker } from './tracker';

export interface IReporte {
  _id?: string;
  //
  idCliente?: string;
  idLinea?: string;
  idTracker?: string;
  idColectivo?: string;
  idRecorrido?: string;
  // Datos de traccar
  traccarUniqueId?: string;
  fecha?: string;
  ubicacion?: ICoordenadas;
  geojson?: IGeoJSONPoint;
  velocidad?: number;

  // Populate
  cliente?: ICliente;
  linea?: ILinea;
  tracker?: ITracker;
  colectivo?: IColectivo;
  recorrido?: IRecorrido;
}

type OmitirCreate = '_id' | 'cliente' | 'tracker' | 'colectivo' | 'recorrido';

export interface ICreateReporte extends Omit<Partial<IReporte>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'cliente' | 'tracker' | 'colectivo' | 'recorrido';

export interface IUpdateReporte extends Omit<Partial<IReporte>, OmitirUpdate> {}
