import { envNumber, env } from '@libs/env-unit';
import { registerAs } from '@nestjs/config';

export default registerAs('dify', () => ({
  url: env('DIFY_SERVICE_URL', ''),
}));
