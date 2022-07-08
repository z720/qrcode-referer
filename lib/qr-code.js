
import QRCode from 'qrcode';

function extractOptions(request) {
	let options = {};
	if(request.query.scale) {
			options['scale'] = parseInt(request.query.scale);
			if(options.scale > 20) {
				throw('Scale is too big (max 20)')
			}
	} 
	if(request.query.size) {
		options['width'] = parseInt(request.query.size);
	}
	options['color']={}
	if(request.query.color) {
		options.color.dark = request.query.color
	}
	if(request.query.background) {
		options.color.light = request.query.background
	}
	return options;
}

export function service(fastify, opt, done) {
    fastify.get('/', (request, reply) => {
        if (!request.headers.referer) {
            reply.send(400, 'Bad Request')
        } else {
            let referer = request.headers.referer;
            let options = extractOptions(request)
            reply.type('image/png');
            QRCode.toFileStream(reply.raw, referer, options);
            fastify.log.info({
                type: 'qr', url: request.url, referer, options, p: request.query
            });
        }
    });
    done();
}