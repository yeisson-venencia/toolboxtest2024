import networkClient from "../networkClient";
import { getFileNames, getFilesList } from "../files.service";

jest.mock("../networkClient");

describe("files funciontions", () => {
  beforeEach(() => {});

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("correctly get file names", () => {
    const resp = { data: [] };
    networkClient.get.mockResolvedValue(resp);

    getFileNames();

    expect(networkClient.get).toHaveBeenCalled();
    expect(networkClient.get).toHaveBeenCalledWith("files/list");
  });

  it("correctly get file List", () => {
    const resp = { data: [] };
    networkClient.get.mockResolvedValue(resp);

    getFilesList();

    expect(networkClient.get).toHaveBeenCalled();
    expect(networkClient.get).toHaveBeenCalledWith("files/data?fileName=");
  });

  it("correctly get file List by filename", () => {
    const resp = { data: [] };
    networkClient.get.mockResolvedValue(resp);

    getFilesList("test.cvs");

    expect(networkClient.get).toHaveBeenCalled();
    expect(networkClient.get).toHaveBeenCalledWith(
      "files/data?fileName=test.cvs"
    );
  });
});
