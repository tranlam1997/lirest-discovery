import { ApiEndpoint } from './interfaces/api-endpoints.interface';
import BaseRepository from '../../base/repository';
import ApiEndpointModel from './api-endpoints.schema';

export const ApiEndpointsRepository = BaseRepository<ApiEndpoint>(ApiEndpointModel);
