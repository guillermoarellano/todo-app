// General purpose Service configuration, good for any entity type

export class DataServiceError<T> {
  constructor(public error: any, public requestData: T) {}
}
