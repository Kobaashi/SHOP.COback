import { Module } from '@nestjs/common';
import { HealthCheckController } from './health-check.controller.js';
import { HealthCheckService } from './health-check.service.js';

@Module({
  imports: [],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class HealthCheckModule {}
