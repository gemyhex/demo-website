import { defineNitroConfig } from "nitropack";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import fs from "fs-extra";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineNitroConfig({
  devServer: {
    port: 3000,
    host: "localhost",
  },
  runtimeConfig: {
    app: {
      baseURL: "/",
    },
  },
  https: {
    cert: process.env.NITRO_SSL_CERT || undefined,
    key: process.env.NITRO_SSL_KEY || undefined,
  },
  server: {
    listenOptions: {
      port: parseInt(process.env.NITRO_PORT || process.env.PORT || "3000"),
      host: process.env.NITRO_HOST || process.env.HOST || undefined,
    },
  },
  sourcemap: false,
  errorHandler: resolve(__dirname, "server/error.ts"),
  imports: {
    dirs: ["./server/utils"],
  },
  hooks: {
    compiled() {
      if (process.env.VERCEL) return;
      try {
        const customEntry = resolve(__dirname, "server/entry.mjs");
        const outputEntry = resolve(
          __dirname,
          ".nitro/output/server/index.mjs"
        );

        // Ensure the file exists before attempting to copy
        if (fs.existsSync(customEntry)) {
          fs.copyFileSync(customEntry, outputEntry);
          console.log(`Custom entry file copied to: ${outputEntry}`);
        } else {
          console.warn(`Custom entry file not found at: ${customEntry}`);
        }
      } catch (error) {
        console.error("Error copying custom entry file:", error);
      }
    },
  },
});
