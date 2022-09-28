import httpService from "../utils/httpResponse.js";
export const CatchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    console.log(err);
    const keys = Object.keys(err.errors);
    httpService[err.errors[keys[0]].reason.code](res);
    next(err);
  });
};
