module.exports = () => ({
  method: "GET",
  path: "/uploads/images/{param*}",
  handler: {
    directory: {
      path: "uploads/images"
    }
  }
});
