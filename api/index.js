const app = require("./app");
const { port } = require("./config");

async function startServer() {
  app
    .listen(port, () => {
      console.log(`Application listening at http://localhost:${port}`);
      app.emit("ready");
    })
    .on("error", (e) => console.error(e));
}

startServer();
