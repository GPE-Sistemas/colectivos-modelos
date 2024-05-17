export interface Trip {
  deviceId?: number;
  deviceName?: string;
  maxSpeed?: number;
  averageSpeed?: number;
  distance?: number;
  spentFuel?: number;
  duration?: number;
  startTime?: Date;
  startAddress?: string;
  startLat?: number;
  startLon?: number;
  endTime?: Date;
  endAddress?: string;
  endLat?: number;
  endLon?: number;
  driverUniqueId?: number;
  driverName?: string;
}

export interface Stop {
  deviceId?: number;
  deviceName?: string;
  duration?: number;
  startTime?: Date;
  address?: string;
  lat?: number;
  lon?: number;
  endTime?: Date;
  spentFuel?: number;
  engineHours?: number;
}

export interface IQueryTraccar {
  idColectivo: string;
  from: string;
  to: string;
}

/**
 * @todo Usar estas otras a través del sistema
 */
