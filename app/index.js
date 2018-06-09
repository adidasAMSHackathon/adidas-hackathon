const path = require("path");
const Hapi = require("hapi");
const Inert = require("inert");
const uploadsRoute = require("./routes/uploads");
const analyseRoute = require("./routes/analyse");

// create a new server
const server = Hapi.server({
  port: 3000,
  host: "localhost",
  routes: {
    files: {
      relativeTo: path.join(__dirname, "public")
    }
  }
});

// handle all "unhandled" rejections so the server doesn't crash
process.on("unhandledRejection", error => {
  console.log(error);
  process.exit(1);
});

// start the server
(async () => {
  await server.register(Inert);

  server.route(uploadsRoute(server));
  server.route(analyseRoute(server));

  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
})();
