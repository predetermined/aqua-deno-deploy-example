import Aqua from "https://raw.githubusercontent.com/l2ig/aqua/main/deploy.ts";

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

app.get("/test", (req) => {
  return "test";
});
