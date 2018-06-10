// serve static images from the /app/uploads folder
module.exports = () => ({
  method: "GET",
  path: "/uploads/{param*}",
  handler: {
    directory: {
      path: "."
    }
  }
});
