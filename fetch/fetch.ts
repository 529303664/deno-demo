/**
 * Output: JSON Data
 */
let json: Promise<Response> | Response = await fetch("https://api.github.com/users/denoland");
json = await json.json();

/**
 * Output: HTML Data
 */
let text: Promise<Response> | Response | string = await fetch("https://deno.land/");
text = await text.text();

Deno.writeTextFileSync(`${Deno.cwd()}/fetch/result.txt`, JSON.stringify(json)); 
Deno.writeTextFileSync(`${Deno.cwd()}/fetch/deno.land.html`, text); 