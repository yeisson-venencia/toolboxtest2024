const chaiModule = require("chai");
const chaihttp = require("chai-http");
const chai = chaiModule.use(chaihttp);
const { assert, request, expect } = chai;
const appServer = require("../app");
const { apiPreFix } = require("../config");

describe("/api", () => {
  it("return correct answer when does not found endpoint", (done) => {
    request(appServer)
      .get(`${apiPreFix}/notfound`)
      .end((_err, res) => {
        assert.equal(res.status, 404);
        done();
      });
  });

  it("lists files correctly", (done) => {
    request(appServer)
      .get(`${apiPreFix}/files/list`)
      .end((_err, res) => {
        assert.equal(res.status, 200);
        expect(res.body).to.be.a("array");
        expect(res.body).to.have.length.greaterThan(0);
        expect(res.body[0]).to.be.a("string");
        done();
      });
  });

  it("returns file data correctly", (done) => {
    request(appServer)
      .get(`${apiPreFix}/files/data`)
      .end((_err, res) => {
        assert.equal(res.status, 200);
        expect(res.body).to.be.a("array");
        expect(res.body).to.have.length.greaterThan(0);
        const firstFileData = res.body[0];
        expect(firstFileData).to.be.a("Object");
        expect(firstFileData).to.haveOwnProperty("file");
        expect(firstFileData).to.haveOwnProperty("lines");
        expect(firstFileData.lines).to.have.length.greaterThan(0);
        const firstFileLinesData = firstFileData.lines[0];
        expect(firstFileLinesData).to.be.a("Object");
        expect(firstFileLinesData).to.haveOwnProperty("text");
        expect(firstFileLinesData).to.haveOwnProperty("number");
        expect(firstFileLinesData).to.haveOwnProperty("hex");
        done();
      });
  });

  it("return data for file name when specified", (done) => {
    request(appServer)
      .get(`${apiPreFix}/files/data?fileName=test6.csv`)
      .end((_err, res) => {
        assert.equal(res.status, 200);
        expect(res.body).to.be.a("array");
        expect(res.body.length).to.equals(1);
        const firstFileData = res.body[0];
        expect(firstFileData).to.be.a("Object");
        expect(firstFileData).to.haveOwnProperty("file");
        expect(firstFileData).to.haveOwnProperty("lines");
        expect(firstFileData.file).to.equals("test6.csv");
        done();
      });
  });

  it("return empty array when file is not found", (done) => {
    request(appServer)
      .get(`${apiPreFix}/files/data?fileName=randomfile.csv`)
      .end((_err, res) => {
        assert.equal(res.status, 200);
        expect(res.body).to.be.a("array");
        expect(res.body.length).to.equals(0);
        done();
      });
  });
});
