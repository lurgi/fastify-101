import { reactRouterFastify } from "@mcansh/remix-fastify/react-router";
import fp from "fastify-plugin";

import type { RawServerBase, RouteGenericInterface } from "fastify";
import type { FastifyInstance } from "fastify/types/instance";
import type { FastifyRequest } from "fastify/types/request";

declare module "react-router" {
  interface AppLoadContext {
    app: FastifyInstance;
    req: FastifyRequest<RouteGenericInterface, RawServerBase>;
  }
}

export default fp(
  async (app) => {
    await app.register(reactRouterFastify, {
      getLoadContext: (req) => {
        return { app, req };
      },
    });
  },
  {
    name: "react-router",
  },
);
