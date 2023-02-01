export interface ServiceRegistry {
  name: string; // service name
  description?: string;
  url: string; // service url
  protocol: string;
  host: string;
  port: number;
  baseUrl: string; // service base url, for example: /api/v1/user
  type: string; // service type
  version: string; // service version
  status: boolean; // service status
}
