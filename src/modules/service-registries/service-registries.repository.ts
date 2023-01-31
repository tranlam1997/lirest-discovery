import { ServiceRegistry } from './interfaces/service-registries.interface';
import BaseRepository from '../../base/repository';
import ServiceRegistryModel from './service-registries.schema';

export const ServiceRegistriesRepository = BaseRepository<ServiceRegistry>(ServiceRegistryModel);
