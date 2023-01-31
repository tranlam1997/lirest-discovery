import { ApiEndpointsRepository } from './api-endpoints.repository';
import { ApiEndpoint } from './interfaces/api-endpoints.interface';
import { BadRequestException } from '../../errors/exceptions/bad-request-exception';

export const ApiEndpointService = {
  async createApiEndpoint(data: ApiEndpoint) {
    const existApi = await ApiEndpointsRepository.findOne({
      route: data.route,
      method: data.method,
    });

    if (existApi) {
      throw new BadRequestException('Api already exists');
    }

    const newApi = await ApiEndpointsRepository.create(data);
    return newApi;
  },

  async getAllApiEndpoints() {
    const apis = await ApiEndpointsRepository.findAll();
    return apis;
  },
};
