export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';

export interface ApiEndpoint {
  route: string;
  description?: string;
  serviceName: string;
  method: HttpMethod;
  apiVersion: number;
  deprecated?: boolean;
}
