//8, 9일차
interface LocalStorageAPI<T> {
    [key: string]: T;
}

abstract class StorageTemplate<T> {
  protected storage: LocalStorageAPI<T> = {};
  abstract setItem(key: string, value: T): void;
}

class LocalStorage<T> extends StorageTemplate<T> {
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string): T | boolean {
    return this.storage[key] || false;
  }
  clearItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}



interface GeolocationAPI {
    clearWatch(watchId: number): void;
  getCurrentPosition(
    successFn: IPositionFn,
    errorFn?: IPositionErrorFn | null,
    optionsObj?:GeolocationAPIOptions
  ): void;
  watchPosition(
    success: IPositionFn,
    error?: IPositionErrorFn | null,
    options?: GeolocationAPIOptions
  ): number;
}

interface IPositionFn {
  (position: IGeolocationPosition): void;
}
interface IGeolocationPosition {
  readonly coords: IGeolocationCoordinates;
  readonly timestamp: IEpochTimeStamp;
}
interface IGeolocationCoordinates {
  readonly accuracy: number;
  readonly altitude: number | null;
  readonly altitudeAccuracy: number | null;
  readonly heading: number | null;
  readonly latitude: number;
  readonly longitude: number;
  readonly speed: number | null;
}
type IEpochTimeStamp = number;

interface IPositionErrorFn {
  (positionError: IGeolocationPositionError): void;
}
interface IGeolocationPositionError {
  readonly code: number;
  readonly message: string;
  readonly PERMISSION_DENIED: number;
  readonly POSITION_UNAVAILABLE: number;
  readonly TIMEOUT: number;
}

interface GeolocationAPIOptions {
  enableHighAccuracy: boolean;
  timeout: number;
  maximumAge: number;
}

class GeolocationAPI implements GeolocationAPI {
  clearWatch(watchId: number) {
    console.log(watchId);
  }
  getCurrentPosition(
    successFn: IPositionFn,
    errorFn?: IPositionErrorFn | null,
    optionsObj?: GeolocationAPIOptions
  ) {
    if (successFn) console.log(successFn);
    if (errorFn) console.log(errorFn);
    if (optionsObj) console.log(optionsObj);
  }
  watchPosition(
    success: PositionCallback,
    error?: PositionErrorCallback | null,
    options?: PositionOptions
  ) {
    if (success) console.log(success);
    if (error) console.log(error);
    if (options) console.log(options);
    return 0;
  }
}

const geolocation = new GeolocationAPI();


