class FileInfo {
  constructor(fileName) {
    this.file = fileName;
    this.lines = [];
  }
}

class LineInfo {
  constructor(text, number, hex) {
    this.text = text;
    this.number = number;
    this.hex = hex;
  }
}

module.exports = {
  FileInfo,
  LineInfo,
};
