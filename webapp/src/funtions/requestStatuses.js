import requestingStatuses from "../constants/requestingStatuses";

export const isRequestingData = (status) =>
  [requestingStatuses.INITIAL, requestingStatuses.REQUESTING].includes(status);
export const isSuccessRequest = (status) =>
  [requestingStatuses.SUCCESS].includes(status);
export const isErrorRequest = (status) =>
  [requestingStatuses.FAILURE].includes(status);
