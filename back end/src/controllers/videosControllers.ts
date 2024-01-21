import { FastifyReply, FastifyRequest } from "fastify";
import Video from "../models/video";

export async function createVideo(req: FastifyRequest, res: FastifyReply) {
    const { name, title, description } = req.body as { name: string; title: string, description: string};

    try {

    } catch(err: any) {
        res.status(500).send({ message: 'occured a error ', })
    }
}