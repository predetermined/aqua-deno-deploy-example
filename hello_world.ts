import Aqua from "https://github.com/l2ig/aqua/blob/main/deploy.ts";

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
