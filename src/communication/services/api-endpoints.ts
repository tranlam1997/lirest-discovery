import { ApiEndpointsService } from '@src/modules/api-endpoints/api-endpoints.service';
import {
  ServerUnaryCall,
  UntypedHandleCall,
  sendUnaryData,
  ApiEndpointsServiceServer,
  EmptyRequest,
  GetAllApiEndpointsResponse,
} from '@tranlam1997/lirest-internal-communication-service';

export class ApiEndpointsServer implements ApiEndpointsServiceServer {
  [method: string]: UntypedHandleCall;

  public async getAllApiEndpoints(
    _call: ServerUnaryCall<EmptyRequest, GetAllApiEndpointsResponse>,
    callback: sendUnaryData<GetAllApiEndpointsResponse>,
  ) {
    const apiEndpoints = await ApiEndpointsService.getAllApiEndpoints();
    callback(null, GetAllApiEndpointsResponse.fromJSON({ apiEndpoints }));
  }
}
