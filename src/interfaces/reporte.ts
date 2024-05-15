import { ICoordenadaOL, ICoordenadas, IGeoJSONPoint } from '../auxiliares';
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
  fechaDevice?: string;
  fechaServer?: string;
  fechaCreacion?: string;
  /**
   * @deprecated Se usa ubicacionOl.
   */
  ubicacion?: ICoordenadas;
  ubicacionOl?: ICoordenadaOL;
  geojson?: IGeoJSONPoint;
  velocidad?: number;

  reporteTraccar?: Record<string, any>;

  // Populate
  cliente?: ICliente;
  linea?: ILinea;
  tracker?: ITracker;
  colectivo?: IColectivo;
  recorrido?: IRecorrido;
}

type OmitirCreate =
  | '_id'
  | 'fechaCreacion'
  | 'cliente'
  | 'tracker'
  | 'colectivo'
  | 'recorrido'
  | 'linea';

export interface ICreateReporte extends Omit<Partial<IReporte>, OmitirCreate> {}

type OmitirUpdate =
  | '_id'
  | 'fechaCreacion'
  | 'cliente'
  | 'tracker'
  | 'colectivo'
  | 'recorrido'
  | 'linea';

export interface IUpdateReporte extends Omit<Partial<IReporte>, OmitirUpdate> {}
