import fastify from "fastify";
import connect from "./config/connect";
import { routes } from "./routes";
import cors from "@fastify/cors";
import prismaClient from "./database/prisma";

const app = fastify();

const start = async () => {
  await app.register(routes);
  await app.register(cors);

  app.get("/hello", async (request, reply) => {});

  prismaClient.$connect()
  
  app
    .listen({ port: connect.port })
    .then(() => console.log("running server is potent"))
    .catch((err) => console.log(err));
  
};

start();
