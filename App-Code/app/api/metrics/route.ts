import { metricsHandler } from '@/lib/metrics';

export async function GET() {
  return metricsHandler();
}
