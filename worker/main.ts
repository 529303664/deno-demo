const logFile: string = "log.txt";
const logFileURL: URL = new URL(logFile, import.meta.url);
const worker = new Worker(new URL("./worker.ts", import.meta.url).href, {
  type: "module",
  deno: {
    namespace: true,
    permissions: {
      read: [
        logFileURL,
      ]
    }
  },
});
worker.postMessage({ filename: `${Deno.cwd()}/worker/${logFile}` });