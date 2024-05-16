import { ICliente } from './cliente';
import { IColectivo } from './colectivo';
import { ITracker } from './tracker';

export interface IEvento {
  _id?: string;
  //
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

type OmitirCreate = '_id | fechaCreacion | cliente | tracker | colectivo';

export interface ICreateEvento extends Omit<Partial<IEvento>, OmitirCreate> {}

type OmitirUpdate = '_id | fechaCreacion | cliente | tracker | colectivo';

export interface IUpdateEvento extends Omit<Partial<IEvento>, OmitirUpdate> {}
