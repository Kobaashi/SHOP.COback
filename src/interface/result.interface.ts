import { HttpStatus } from '@nestjs/common';

export interface Result {
  status_code: HttpStatus;
  detail: string;
  result: string;
}
