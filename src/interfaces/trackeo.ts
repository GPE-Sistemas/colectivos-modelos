import { ICliente } from './cliente';

export interface ITrackeo {
  _id?: string;
  //
  idCliente?: string;
  idColectivo?: string;

  fecha?: string;
  idParada?: string;
  fechaProximaParada?: string;
  idProximaParada?: string;

  // Populate
  cliente?: ICliente;
}

type OmitirCreate = '_id' | 'cliente';

export interface ICreateTrakeo extends Omit<Partial<ITrackeo>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'cliente';

export interface IUpdateTrakeo extends Omit<Partial<ITrackeo>, OmitirUpdate> {}
