import type { Env, Hono } from "hono";
import { showRoutes } from "hono/dev";
import type { BlankSchema } from "hono/types";
import { createApp } from "honox/server";

const app: Hono<Env, BlankSchema, "/"> = createApp();

showRoutes(app);

export default app;
