//HTTP Responses
import { ErrorCodesMeta } from "../constants/error-codes.js";
import { SuccessCodesMeta } from "../constants/success-codes.js"
export default {
  SUCCESS: (res, data = {}, message = SuccessCodesMeta.SUCCESS.message) => {
    res.status(200).json({
      meta: {
        status: 200,
        response: "OK",
        message,
      },
      data,
    });
  },
  CREATED: (res, data = {}, message = SuccessCodesMeta.CREATED.message) => {
    res.status(201).json({
      meta: {
        status: 201,
        response: "Created",
        message,
      },
      data,
    });
  },
  ACCEPTED: (res, data = {}, message = SuccessCodesMeta.ACCEPTED.message) => {
    res.status(202).json({
      meta: {
        status: 202,
        response: "Accepted",
        message,
      },
      data,
    });
  },
  NON_AUTHORATIVE: (res, data = {}, message = SuccessCodesMeta.NON_AUTHORATIVE.message) => {
    res.status(203).json({
      meta: {
        status: 203,
        response: "Non-Authoritative Information",
        message,
      },
      data,
    });
  },
  NO_CONTENT: (res, data = {}, message = SuccessCodesMeta.NO_CONTENT.message) => {
    res.status(204).json({
      meta: {
        status: 204,
        response: "No Content",
        message,
      },
      data,
    });
  },
  NOT_MODIFIED: (res, data = {}, message = SuccessCodesMeta.NOT_MODIFIED.message) => {
    res.status(304).json({
      meta: {
        status: 304,
        response: "Not Modified.",
        message,
      },
      data,
    });
  },
  BAD_REQUEST: (res, data = {}, message = ErrorCodesMeta.BAD_REQUEST.message) => {
    res.status(400).json({
      meta: {
        status: 400,
        response: "Bad Request",
        message,
      },
      data,
    });
  },
  UNAUTHORIZED: (res, data = {}, message = ErrorCodesMeta.UNAUTHORIZED.message) => {
    res.status(401).json({
      meta: {
        status: 401,
        response: "Unauthorized",
        message,
      },
      data,
    });
  },
  PAYMENT_REQUIRED: (res, data = {}, message = ErrorCodesMeta.PAYMENT_REQUIRED.message) => {
    res.status(402).json({
      meta: {
        status: 402,
        response: "Payment Required",
        message,
      },
      data,
    });
  },
  FORBIDDEN: (res, data = {}, message = ErrorCodesMeta.FORBIDDEN.message) => {
    res.status(403).json({
      meta: {
        status: 403,
        response: "Forbidden",
        message,
      },
      data,
    });
  },
  NOT_FOUND: (res, data = {}, message = ErrorCodesMeta.NOT_FOUND.message) => {
    res.status(404).json({
      meta: {
        status: 404,
        response: "Not Found",
        message,
      },
      data,
    });
  },
  CONFLICT: (res, data = {}, message = ErrorCodesMeta.CONFLICT.message) => {
    res.status(409).json({
      meta: {
        status: 409,
        response: "Conflict",
        message,
      },
      data,
    });
  },
  NOT_ALLOWED: (res, data = {}, message = ErrorCodesMeta.NOT_ALLOWED.message) => {
    res.status(405).json({
      meta: {
        status: 405,
        response: "Method not allowed.",
        message,
      },
      data,
    });
  },
  INTERNAL_SERVER: (res, data = {}, message = ErrorCodesMeta.INTERNAL_SERVER_ERROR.message) => {
    res.status(403).json({
      meta: {
        status: 409,
        response: "Internal Server Error",
        message,
      },
      data,
    });
  },
};
