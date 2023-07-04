import { Response, Server } from 'miragejs';
import { AppSchema } from '../types';

export function routesForVans(server: Server) {
	server.get('/vans', (schema: AppSchema, _request) => {
		const vans = schema.all('van');
		const seconds = new Date().getSeconds();
		return seconds % 17 === 0
			? new Response(401, {}, { error: true })
			: new Response(200, {}, vans);
	});
	server.get('/vans/:id', (schema: AppSchema, request) => {
		const { id } = request.params;
		const vans = schema.find('van', id);
		const seconds = new Date().getSeconds();
		return seconds % 17 === 0
			? new Response(401, {}, { error: true })
			: new Response(200, {}, { vans });
	});
}
