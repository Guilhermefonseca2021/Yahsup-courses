
import prismaClient from "../database/prisma";
import { Video } from "./../types/video";

class CreateVideo {
  async execute({ title, description, author }: Video) {
    if (!title || !description || !author) {
      throw new Error("Fill up all fields!");
    }

    const video = await prismaClient.video.create({
      data: {
        title,
        description,
        author,
        status: true
      },
    });

    return { ok: true };
  }
}

export { CreateVideo };
