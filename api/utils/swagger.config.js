const { port } = require("../config");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "API-Rest-Toolbox",
      description: "Toolbox Test API 2024",
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    servers: [
      {
        url: `http://localhost:${port}`,
        description: "Local development enviroment",
      },
    ],
  },
  apis: ["./controllers/**/*.controller.js"],
};

module.exports = swaggerOptions;
