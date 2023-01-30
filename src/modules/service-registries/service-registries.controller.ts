import { asyncHandler } from '../../shared/helper';
import { Request, Response, Router } from 'express';
import { ServiceRegistryService } from './service-registries.service';
import { ResultResponse } from '../../shared/response-format';

const ServiceRegistryRouter = Router();

export default (app: Router) => {
  ServiceRegistryRouter.route('/')
    .post(
      asyncHandler(async (req: Request, res: Response) => {
        const service = await ServiceRegistryService.createServiceRegistry(req.body);
        return ResultResponse.info(res, {
          response: {
            data: service,
          },
        });
      }),
    )
    .get(
      asyncHandler(async (_req: Request, res: Response) => {
        const services = await ServiceRegistryService.getAllServiceRegistries();
        return ResultResponse.info(res, {
          response: {
            data: services,
          },
        });
      }),
    );

  app.use('/service-registry', ServiceRegistryRouter);
};
