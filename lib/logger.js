import pino from 'pino'

const serializers = {
	// req (request) {
	// 	return { type: 'request '}
	// },
	// res (reply) {
	// 	return { type: 'response '}
	// }
}

const transports = pino.transport({
	targets: [
		{
			target: 'pino/file', 
			options: { 
				destination: 'logs/server.log', 
				mkdir: true,
				translateTime: 'HH:MM:ss Z',
			}
		},
		{
			target: 'pino/file', 
			options: { 
				translateTime: 'HH:MM:ss Z', 
				ignore: ['pid','hostname'],
			},
		}
	]
});
export const logger = pino({
	serializers,
	transports,
	redact: {
		paths: ['pid', 'hostname'],
		remove: true
	}
});
