import Aqua from "https://deno.land/x/aqua/deploy.ts";

const app = new Aqua();

app.get("/", (req) => {
  return "Hello, World!";
});

app.get("/hello", (req) => {
  return "Hello";
});

app.get("/world", (req) => {
  return "World";
});
