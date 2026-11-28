import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './health-check.service.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Controller('health')
export class HealthCheckController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly healthService: HealthCheckService,
  ) {}

  @Get()
  async check() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return this.healthService.successfullConnectionToDB();
    } catch {
      return this.healthService.failedfullConnectionToDB();
    }
  }
}
