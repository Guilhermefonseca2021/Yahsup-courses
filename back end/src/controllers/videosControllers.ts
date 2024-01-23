import { FastifyReply, FastifyRequest } from "fastify";
import { CreateVideo } from "../models/Video";

export class CreateVideoControllers {
  async handle(requesst: FastifyRequest, reply: FastifyReply) {
    const newVideo = new CreateVideo();

    const video = await newVideo.execute();

    reply.send(video)
  }
}

