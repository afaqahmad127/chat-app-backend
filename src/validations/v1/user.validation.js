import Joi from "joi";

const register = {
  body: Joi.object().keys({
  firstName: Joi.string().min(4).max(26).required(),
  lastName: Joi.string().min(4).max(26).required(),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export { register, login };
