import {
  isErrorRequest,
  isRequestingData,
  isSuccessRequest,
} from "../requestStatuses";
import requestingStatuses from "../../constants/requestingStatuses";

describe("requestStatuses functions Tests", () => {
  it("return correct value for isErrorRequest", () => {
    expect(isErrorRequest(requestingStatuses.INITIAL)).toBe(false);
    expect(isErrorRequest(requestingStatuses.REQUESTING)).toBe(false);
    expect(isErrorRequest(requestingStatuses.SUCCESS)).toBe(false);
    expect(isErrorRequest(requestingStatuses.FAILURE)).toBe(true);
  });

  it("return correct value for isRequestingData", () => {
    expect(isRequestingData(requestingStatuses.INITIAL)).toBe(true);
    expect(isRequestingData(requestingStatuses.REQUESTING)).toBe(true);
    expect(isRequestingData(requestingStatuses.SUCCESS)).toBe(false);
    expect(isRequestingData(requestingStatuses.FAILURE)).toBe(false);
  });

  it("return correct value for isSuccessRequest", () => {
    expect(isSuccessRequest(requestingStatuses.INITIAL)).toBe(false);
    expect(isSuccessRequest(requestingStatuses.REQUESTING)).toBe(false);
    expect(isSuccessRequest(requestingStatuses.SUCCESS)).toBe(true);
    expect(isSuccessRequest(requestingStatuses.FAILURE)).toBe(false);
  });
});
