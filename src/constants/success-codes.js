const SuccessCodes = {
  SUCCESS: "SUCCESS",
  CREATED: "CREATED",
  ACCEPTED: "ACCEPTED",
  NON_AUTHORATIVE: "NON_AUTHORATIVE",
  NO_CONTENT: "NO_CONTENT",
  NOT_MODIFIED: "NOT_MODIFIED",
};

export const SuccessCodesMeta = {
  SUCCESS: {
    code: SuccessCodes.SUCCESS,
    message: "Success",
  },
  CREATED: {
    code: SuccessCodes.CREATED,
    message: "Created",
  },
  ACCEPTED: {
    code: SuccessCodes.ACCEPTED,
    message: "Accepted",
  },
  NON_AUTHORATIVE: {
    code: SuccessCodes.NON_AUTHORATIVE,
    message: "Non-Authoritative Information",
  },
  NO_CONTENT: {
    code: SuccessCodes.NO_CONTENT,
    message: "No Content",
  },
  NOT_MODIFIED: {
    code: SuccessCodes.NOT_MODIFIED,
    message: "Not Modified.",
  }
};

export default SuccessCodes;
