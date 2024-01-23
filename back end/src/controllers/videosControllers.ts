import { FastifyReply, FastifyRequest } from "fastify";
import { CreateVideo } from "../models/Video";
import { Video } from "../types/video";

export class CreateVideoControllers {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { title, description } = request.body as Video;
    const newVideo = new CreateVideo();

    const video = await newVideo.execute({ title, description });

    reply.send(video);
  }
}
