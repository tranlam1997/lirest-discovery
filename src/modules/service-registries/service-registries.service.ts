import { ServiceRegistryRepository } from './service-registries.repository';
import { ServiceRegistry } from './interfaces/service-registries.interface';
import { BadRequestException } from '../../errors/exceptions/bad-request-exception';

export const ServiceRegistryService = {
  async createServiceRegistry(data: ServiceRegistry) {
    const existService = await ServiceRegistryRepository.findOne({
      name: data.name,
    });

    if (existService) {
      throw new BadRequestException('Service already exists');
    }

    const newService = await ServiceRegistryRepository.create(data);
    return newService;
  },

  async getAllServiceRegistries() {
    const services = await ServiceRegistryRepository.findAll();
    return services;
  },
};
