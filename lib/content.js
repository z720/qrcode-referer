import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function service(fastify, opt, done) {
    fastify.register(fastifyStatic, {
        root: path.join(__dirname, '../static'),
        prefix: '/static/', // optional: default '/'
    });
    fastify.get('/', function (req, reply) {
        return reply.sendFile('index.html') // serving path.join(__dirname, 'public', 'myHtml.html') directly
    });
    done();
}