import { ServiceRegistriesRepository } from './service-registries.repository';
import { ServiceRegistry } from './interfaces/service-registries.interface';
import { BadRequestException } from '../../errors/exceptions/bad-request-exception';
import { renameKey } from '@src/shared/helper';

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
    const services = await ServiceRegistriesRepository.findAll(
      {},
      {},
      {},
      {
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    );
    return services.map((service) => renameKey(service, '_id', 'id'));
  },
};
