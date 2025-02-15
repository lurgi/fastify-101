import "dotenv-safe/config.js";
import { makeApp } from "./makeApp";

const HOST = process.env.HOST ?? "0.0.0.0";
const PORT = Number(process.env.PORT ?? "8000");

const app = makeApp();

app.listen({
  port: PORT,
  host: HOST,
});

app.log.info(
  {},
  `server listening app PORT: ${PORT}, http://localhost:${PORT}`,
);
