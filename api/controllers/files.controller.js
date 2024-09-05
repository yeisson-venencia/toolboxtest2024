const express = require("express");
const asyncHandler = require("../utils/asyncHandler");

const {
  findFilesDataHandler,
  listFileHandler,
} = require("../services/files.service");

const filesRouter = express.Router();

filesRouter.get("/data", asyncHandler(findFilesDataHandler));
filesRouter.get("/list", asyncHandler(listFileHandler));

module.exports = filesRouter;
