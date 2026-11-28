import { HttpStatus, Injectable } from '@nestjs/common';
import { Result } from '../interface/result.interface.js';

@Injectable()
export class HealthCheckService {
  async successfullConnectionToDB(): Promise<Result> {
    return {
      status_code: HttpStatus.OK,
      detail: 'ok',
      result: 'Successfully connection to DB',
    };
  }

  async failedfullConnectionToDB(): Promise<Result> {
    return {
      status_code: HttpStatus.SERVICE_UNAVAILABLE,
      detail: 'error',
      result: 'Failed connection to DB',
    };
  }
}
