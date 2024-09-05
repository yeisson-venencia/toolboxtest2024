const express = require("express");
const asyncHandler = require("../utils/asyncHandler");

const {
  findFilesDataHandler,
  listFileHandler,
} = require("../services/files.service");

const filesRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Files
 *   description: files endpoints
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     LineData:
 *       type: object
 *       properties:
 *         text:
 *           type: string
 *           description: text value
 *         number:
 *           type: string
 *           description: number value
 *         hex:
 *           type: string
 *           description: hex value
 *       example:
 *         text: Testtext
 *         number: 234ff2dfas
 *         hex: sadvfve324vsfsf2
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     FileInfo:
 *       type: object
 *       properties:
 *         file:
 *           type: string
 *           description: file name
 *         lines:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/LineData'
 *       example:
 *         file: test.csv
 *         lines: []
 */

/**
 * @swagger
 * /api/v1/files/data:
 *   get:
 *     summary: Get the data for every file
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: File information collection
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FileInfo'
 */

/**
 * @swagger
 * /api/v1/files/data?fileName={fileName}:
 *   get:
 *     summary: Get the data for single file
 *     parameters:
 *       - in: query
 *         name: fileName
 *         schema:
 *           type: string
 *         required: false
 *         description: file name
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: File information collection
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FileInfo'
 */
filesRouter.get("/data", asyncHandler(findFilesDataHandler));

/**
 * @swagger
 * /api/v1/files/list:
 *   get:
 *     summary: Get the data for every file
 *     tags: [Files]
 *     responses:
 *       200:
 *         description: File information collection
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *                 example: test2.csv
 */
filesRouter.get("/list", asyncHandler(listFileHandler));

module.exports = filesRouter;
