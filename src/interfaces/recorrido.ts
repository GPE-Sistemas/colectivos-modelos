import {
  ICoordenadaOL,
  ICoordenadas,
  IGeoJSONLineString,
  IGeoJSONPoint,
} from '../auxiliares';
import { ICliente } from './cliente';
import { ILinea } from './linea';

export interface IParada {
  _id?: string;
  /**
   * @deprecated Se usa ubicacionOl.
   */
  ubicacion?: ICoordenadas;
  ubicacionOl?: ICoordenadaOL;
  geojson?: IGeoJSONPoint;
  nombre?: string;
  direccion?: string;
  destino?: string;
  por?: string;
}

export interface IFranjaHoraria {
  dia?: number; // Número de 0 a 6, siendo 0 el domingo
  desde?: string;
  hasta?: string;
  frecuenciaMinutos?: number;
}

export interface IRecorrido {
  _id?: string;

  idCliente?: string;
  idLinea?: string;
  //
  nombre?: string;
  /**
   * @deprecated Se usa recorridoOl.
   */
  recorrido?: ICoordenadas[];
  recorridoOl?: ICoordenadaOL[];
  geojson?: IGeoJSONLineString;
  paradas?: IParada[];
  franjaHoraria?: IFranjaHoraria[];
  destino?: string;
  por?: string;
  //
  color?: string;

  // Populate
  cliente?: ICliente;
  linea?: ILinea;
}

type OmitirCreate = '_id' | 'cliente' | 'linea';

export interface ICreateRecorrido
  extends Omit<Partial<IRecorrido>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'cliente' | 'linea';

export interface IUpdateRecorrido
  extends Omit<Partial<IRecorrido>, OmitirUpdate> {}
