const express = require("express");
const filesRouter = require("./files.controller");

const appRouter = express.Router();

appRouter.use("/files", filesRouter);

module.exports = appRouter;
