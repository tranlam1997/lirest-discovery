import { asyncHandler } from '../../shared/helper';
import { Request, Response, Router } from 'express';
import { ApiEndpointsService } from './api-endpoints.service';
import { ResultResponse } from '../../shared/response-format';

const ApiEndpointRouter = Router();

export default (app: Router) => {
  ApiEndpointRouter.route('/')
    .post(
      asyncHandler(async (req: Request, res: Response) => {
        const api = await ApiEndpointsService.createApiEndpoint(req.body);
        return ResultResponse.info(res, {
          response: {
            data: api,
          },
        });
      }),
    )
    .get(
      asyncHandler(async (_req: Request, res: Response) => {
        const apis = await ApiEndpointsService.getAllApiEndpoints();
        return ResultResponse.info(res, {
          response: {
            data: apis,
          },
        });
      }),
    );

  app.use('/api-endpoints', ApiEndpointRouter);
};
