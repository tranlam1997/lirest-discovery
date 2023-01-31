import { ServiceRegistriesRepository } from './service-registries.repository';
import { ServiceRegistry } from './interfaces/service-registries.interface';
import { BadRequestException } from '../../errors/exceptions/bad-request-exception';

export const ServiceRegistriesService = {
  async createServiceRegistry(data: ServiceRegistry) {
    const existService = await ServiceRegistriesRepository.findOne({
      name: data.name,
    });

    if (existService) {
      throw new BadRequestException('Service already exists');
    }

    const newService = await ServiceRegistriesRepository.create(data);
    return newService;
  },

  async getAllServiceRegistries() {
    const services = await ServiceRegistriesRepository.findAll();
    return services;
  },
};
