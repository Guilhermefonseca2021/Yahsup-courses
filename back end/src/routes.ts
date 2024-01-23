import {FastifyInstance, FastifyPluginOptions, FastifyReply, FastifyRequest  } from 'fastify';
import { CreateVideoControllers } from './controllers/videosControllers';

export async function routes(fastfy: FastifyInstance, options: FastifyPluginOptions) {
    fastfy.get("/test", async(request: FastifyRequest, Reply: FastifyReply) => {
        return { ok: true }
    })
    fastfy.post("/create-video", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateVideoControllers().handle(request, reply)
    })
}