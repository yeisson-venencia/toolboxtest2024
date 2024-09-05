const SuccessResponseHandler = require("../responses/SuccessResponseHandler");
const { FileInfo, LineInfo } = require("../model/FileInfo");
const networkClient = require("./NetworkClient");
const NotFoundError = require("../exceptions/NotFoundError");

const findFilesDataHandler = async (req, res, _next) => {
  const singleFileSearch = req.query.fileName;
  const filesData = [];

  try {
    const fileList = await getFileList();

    for (const fileName of fileList) {
      if (Boolean(singleFileSearch) && singleFileSearch !== fileName) {
        continue;
      }
      const fileInfo = await getSingleFileData(fileName);
      if (fileInfo.lines.length > 0) {
        filesData.push(fileInfo);
      }
    }
    return SuccessResponseHandler.send(res, filesData);
  } catch (error) {
    throw new NotFoundError("Resource not found");
  }
};

const listFileHandler = async (_req, res, _next) => {
  try {
    const fileList = await getFileList();
    return SuccessResponseHandler.send(res, fileList);
  } catch (error) {
    throw new NotFoundError("Resource not found");
  }
};

const getSingleFileData = async (fileName) => {
  const fileInfo = new FileInfo(fileName);
  try {
    const fileDataResponse = await networkClient.get(`secret/file/${fileName}`);
    const fileContent = fileDataResponse.data;
    const lines = fileContent.split("\n");
    if (lines.length > 1) {
      const infoLines = lines.slice(1);
      for (info of infoLines) {
        const columnsInfo = info.split(",");
        if (columnsInfo.length === 4) {
          const [_, text, number, hex] = columnsInfo;
          fileInfo.lines.push(new LineInfo(text, number, hex));
        }
      }
    }
  } catch (error) {}

  return fileInfo;
};

const getFileList = async () => {
  const fileNamesResponse = await networkClient.get("secret/files");
  return fileNamesResponse.data.files;
};

module.exports = {
  findFilesDataHandler,
  listFileHandler,
};
