// Basic dependencies
import Fastify from 'fastify';

// App component
import { logger } from './lib/logger.js'
import { service as qrService } from './lib/qr-code.js';
import { service as healthcheck} from './lib/healthcheck.js';
import { service as content } from './lib/content.js'

const PORT = process.env.PORT || 3000;

const fastify = Fastify({
	logger
});

fastify.register(content)
fastify.register(healthcheck, { prefix: '/healthcheck' });
fastify.register(qrService, { prefix: '/qrcode' });
fastify.register(qrService, { prefix: '/v1' });

// Run the server!
fastify.listen({ port: PORT, host: '0.0.0.0' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
	fastify.log.info(`Server is now listening on ${address}`)
});
