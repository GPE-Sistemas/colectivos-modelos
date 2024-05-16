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
}

type OmitirCreate = '_id';

export interface ICreateEvento extends Omit<Partial<IEvento>, OmitirCreate> {}

type OmitirUpdate = '_id';

export interface IUpdateEvento extends Omit<Partial<IEvento>, OmitirUpdate> {}
