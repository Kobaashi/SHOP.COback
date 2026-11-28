import { Injectable } from '@nestjs/common';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseStorageService {
  private readonly client: SupabaseClient;
  private readonly bucket: string;

  constructor(private readonly configService: ConfigService) {
    const url = this.configService.getOrThrow<string>('SUPABASE_URL');
    const token = this.configService.getOrThrow<string>('SUPABASE_TOKEN');

    this.bucket =
      this.configService.get<string>('SUPABASE_PRODUCTS_BUCKET') ??
      'PHOTOFORPRODUCTS';

    this.client = createClient(url, token);
  }
}
