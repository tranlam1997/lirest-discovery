import { Application, Router } from 'express';
import ServiceRegistryController from '../modules/service-registries/service-registries.controller';
import ApiEndpointsController from '../modules/api-endpoints/api-endpoints.controller';
import config from 'config';

const router = Router();
const baseUrl = config.get<string>('service.baseUrl');

export default (app: Application) => {
  ServiceRegistryController(router);
  ApiEndpointsController(router);
  // test server connection
  app.get(`${baseUrl}/ping`, (_req, res) => {
    res.send('Pong!');
  });
  app.use(baseUrl, router);
};
