
export function service(fastify, opt, done) {
    fastify.get('/*', function (request, reply) {
        reply.send('👌');
    });
    done();
}