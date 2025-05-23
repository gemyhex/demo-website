// server/entry.mjs
import process from "node:process";

globalThis._importMeta_ = { url: import.meta.url, env: process.env };

import { Server as Server$1 } from "node:http";
import { Server } from "node:https";
import {
  toNodeListener,
  destr,
  useRuntimeConfig,
  trapUnhandledNodeErrors,
  setupGracefulShutdown,
  useNitroApp,
} from "./chunks/_/nitro.mjs";

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const nitroApp = useNitroApp();
const server =
  cert && key
    ? new Server({ key, cert }, toNodeListener(nitroApp.h3App))
    : new Server$1(toNodeListener(nitroApp.h3App));

const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3000;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;

const isNamedPipe =
  typeof process.env.PORT === "string" &&
  process.env.PORT.startsWith("\\\\.\\pipe\\");

const listener = server.listen(
  isNamedPipe ? process.env.PORT : { port, host },
  (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    const protocol = cert && key ? "https" : "http";
    const addressInfo = listener.address();
    if (typeof addressInfo === "string") {
      console.log(`Listening on named pipe ${addressInfo}`);
      return;
    }
    const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
    const url = `${protocol}://${
      addressInfo.family === "IPv6"
        ? `[${addressInfo.address}]`
        : addressInfo.address
    }:${addressInfo.port}${baseURL}`;
    console.log(`Listening on ${url}`);
  }
);

trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);

export default {};
