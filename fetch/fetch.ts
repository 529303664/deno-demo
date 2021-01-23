import { Webview } from 'https://deno.land/x/webview@0.5.5/mod.ts';
const jsonUrl = "https://api.github.com/users/denoland";
const htmlUrl = "https://deno.land/";
/**
 * Output: JSON Data
 */
let json: Promise<Response> | Response = await fetch(jsonUrl);
json = await json.json();

/**
 * Output: HTML Data
 */
let htmlData: Promise<Response> | Response | string = await fetch(htmlUrl);
htmlData = await htmlData.text();

Deno.writeTextFileSync(`${Deno.cwd()}/tmp/result.txt`, JSON.stringify(json)); 
Deno.writeTextFileSync(`${Deno.cwd()}/tmp/deno.land.html`, htmlData); 

const webview = new Webview({ url: htmlUrl });
await webview.run();