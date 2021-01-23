// import { serve } from "https://deno.land/std/http/server.ts";
import { serve } from "deno_land/std/http/server.ts";
const s = serve({ port: 9010 });
console.log("http://localhost:9010/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}