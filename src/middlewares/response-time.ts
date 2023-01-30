import { logger } from '../common/winston';
import { BaseRequest } from '../base/request';
import { NextFunction } from 'express';
import { BaseResponse } from '@src/base/response';
import { convertNanosecondsToMilliseconds } from '@src/shared/helper';

const ResponseTimeLogger = logger('Response-Time');

export default function responseTime(req: BaseRequest, res: BaseResponse, next: NextFunction) {
  const start = process.hrtime.bigint();
  req.startTime = start;
  res.on('finish', () => {
    const end = process.hrtime.bigint();
    const responseTime = convertNanosecondsToMilliseconds(Number(end - start));
    ResponseTimeLogger.info(`Response time: ${responseTime} ms`);
  });
  next();
}
