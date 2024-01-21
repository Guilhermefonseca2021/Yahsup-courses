import fastify from "fastify";
import connect from "./config/connect";
import connectToDatabase from "./database/connect";

const app = fastify();

app.get("/hello", async (request, reply) => {});

connectToDatabase().then(() =>
  app
    .listen({ port: connect.port })
    .then(() => console.log("running server is potent"))
    .catch((err) => console.log(err))
);
