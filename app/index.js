const path = require("path");
const Hapi = require("hapi");
const Inert = require("inert");
const uploadsRoute = require("./routes/uploads");
const analyseRoute = require("./routes/analyse");

// handle all "unhandled" rejections so the server doesn't crash
process.on("unhandledRejection", error => {
  console.log(error);
  process.exit(1);
});

// create a new server
const server = Hapi.server({
  port: process.env.PORT || 3000,
  routes: {
    files: {
      relativeTo: path.join(__dirname, "uploads")
    }
  }
});

// start the server
(async () => {
  await server.register(Inert);

  // register the route for analysing images
  // and for serving them
  server.route(uploadsRoute(server));
  server.route(analyseRoute(server));

  await server.start();

  console.log(server.info);

  process.serviceUrl = process.env.URI || server.info.uri || "";

  console.log(`Server running at: ${process.serviceUrl}`);
})();
