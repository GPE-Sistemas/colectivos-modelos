export interface IImagenesCliente {
  icono?: string;
  banner?: string;
}

export interface ITemaCliente {
  primaryColor?: string;
  accentColor?: string;
  warnColor?: string;
  typography?: string;
}

export interface IConfigCliente {
  imagenes?: IImagenesCliente;
  tema?: ITemaCliente;
}

export interface ICliente {
  _id?: string;
  activo?: boolean;
  esAdmin?: boolean;
  nombre?: string;
  fechaCreacion?: string;
  config?: IConfigCliente;
}

type OmitirCreate = "_id";

export interface ICreateCliente extends Omit<Partial<ICliente>, OmitirCreate> {}

type OmitirUpdate = "_id";

export interface IUpdateCliente extends Omit<Partial<ICliente>, OmitirUpdate> {}
