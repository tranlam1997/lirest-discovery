import { ServiceRegistriesService } from '@src/modules/service-registries/service-registries.service';
import {
  ServerUnaryCall,
  UntypedHandleCall,
  sendUnaryData,
  EmptyRequest,
  ServiceRegistriesServiceServer,
  GetAllServiceRegistriesResponse,
} from '@tranlam1997/lirest-internal-communication-service';

export class ServiceRegistriesServer implements ServiceRegistriesServiceServer {
  [method: string]: UntypedHandleCall;

  public async getAllServiceRegistries(
    _call: ServerUnaryCall<EmptyRequest, GetAllServiceRegistriesResponse>,
    callback: sendUnaryData<GetAllServiceRegistriesResponse>,
  ) {
    const apiEndpoints = await ServiceRegistriesService.getAllServiceRegistries();
    callback(null, GetAllServiceRegistriesResponse.fromJSON({ serviceRegistries: apiEndpoints }));
  }
}
