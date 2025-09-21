import client from 'prom-client';
import { NextRequest, NextResponse } from 'next/server';

client.collectDefaultMetrics();

export async function metricsHandler(req: NextRequest, res: NextResponse) {
  res.headers.set('Content-Type', client.register.contentType);
  return new NextResponse(await client.register.metrics(), {
    headers: { 'Content-Type': client.register.contentType },
  });
}
