import { ServiceRegistry } from './interfaces/service-registries.interface';
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export const ServiceRegistrySchema = new mongoose.Schema<ServiceRegistry>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    description: String,
    url: String,
    protocol: String,
    host: String,
    port: Number,
    baseUrl: String,
    type: String,
    version: String,
    status: Boolean,
  },
  {
    timestamps: true,
  },
);

ServiceRegistrySchema.plugin(mongoosePaginate);

export default mongoose.model('ServiceRegistries', ServiceRegistrySchema);
