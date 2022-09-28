const throwError = (msg, fn) => {
  let err = new Error(msg);
  err.code = fn;
  throw err;
};
export { throwError };
