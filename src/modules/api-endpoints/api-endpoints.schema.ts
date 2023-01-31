import { ApiEndpoint } from './interfaces/api-endpoints.interface';
import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export const ApiEndpointSchema = new mongoose.Schema<ApiEndpoint>(
  {
    route: {
      type: String,
      required: true,
    },
    description: String,
    serviceName: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    apiVersion: {
      type: Number,
      required: true,
    },
    deprecated: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

ApiEndpointSchema.plugin(mongoosePaginate);

export default mongoose.model('ApiEndpoints', ApiEndpointSchema);
