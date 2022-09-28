import Joi from "joi";

const message = {
    body: Joi.object().keys({
        userId: Joi.string().min(16).required(),
        text: Joi.string().min(1).required(),
    }),
};
export { message };
