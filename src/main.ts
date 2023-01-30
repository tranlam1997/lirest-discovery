import express from 'express';
import config from 'config';
import requestTracingMiddleware from './middlewares/request-tracing';
import { logger } from './common/winston';
import 'reflect-metadata';
import { createLightship } from 'lightship';

const MainLogger = logger('Main');

(async () => {
  const app: express.Application = express();
  const port = config.get('service.port');
  app.use(requestTracingMiddleware());

  await import('./shared/bootstrap').then((bootstrap) => bootstrap.default(app));

  const lightship = await createLightship();

  const expressServer = app
    .listen(process.env.PORT || port, async () => {
      // await import('./communication/server');
      MainLogger.info(
        `Service running at https://${config.get('service.host')}:${process.env.PORT || port}`,
      );
    })
    .on('error', () => {
      MainLogger.error('Unable to start server');
      lightship.shutdown();
    });

  lightship.registerShutdownHandler(() => {
    expressServer.close();
  });
})();
