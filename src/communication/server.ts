import {
  LirestGrpcServer,
  ApiEndpointsServiceService,
  ServiceRegistriesServiceService,
} from '@tranlam1997/lirest-internal-communication-service';
import { ApiEndpointsServer } from './services/api-endpoints';
import { ServiceRegistriesServer } from './services/service-registries';

const server = new LirestGrpcServer({
  host: '0.0.0.0:50052',
  channelOptions: {
    'grpc.max_receive_message_length': -1,
    'grpc.max_send_message_length': -1,
  },
});

server.addService(ApiEndpointsServiceService, new ApiEndpointsServer());
server.addService(ServiceRegistriesServiceService, new ServiceRegistriesServer());

server.bindAsync();
