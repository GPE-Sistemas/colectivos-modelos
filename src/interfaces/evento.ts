import { ICliente } from './cliente';
import { IColectivo } from './colectivo';
import { ITracker } from './tracker';

export interface IEventoTraccar {
  _id?: string;
  //
  traccarUniqueId?: string;
  idTracker?: string;
  idColectivo?: string;
  idCliente?: string;
  tipo?: 'events' | 'devices';
  //
  fechaCreacion?: string;

  data?: Record<string, any>;
  ///
  tracker?: ITracker;
  colectivo?: IColectivo;
  cliente?: ICliente;
}

type OmitirCreate =
  | '_id'
  | 'fechaCreacion'
  | 'cliente'
  | 'tracker'
  | 'colectivo';

export interface ICreateEventoTraccar
  extends Omit<Partial<IEventoTraccar>, OmitirCreate> {}

type OmitirUpdate =
  | '_id'
  | 'fechaCreacion'
  | 'cliente'
  | 'tracker'
  | 'colectivo';

export interface IUpdateEventoTraccar
  extends Omit<Partial<IEventoTraccar>, OmitirUpdate> {}
