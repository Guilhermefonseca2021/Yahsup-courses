import prismaClient from "../database/prisma";

class CreateVideo {
  async execute() {
    console.log("Rota foi chamada");

    return { ok: true };
  }
}

export { CreateVideo };
