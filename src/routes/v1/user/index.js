import express from 'express';
const router = express.Router();
import userController from './controller.js';
import {validate} from "../../../middleware/validate.js";
import {register} from "../../../validations/v1/user.validation.js";

router.route('/').post( validate(register), userController.createUser);

export default router;
