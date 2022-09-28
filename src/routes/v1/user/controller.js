import {CatchAsync} from '../../../utils/catchAsync.js';
import userService from '../../../services/v1/user.service.js';
import httpService from '../../../utils/httpResponse.js';

const createUser = CatchAsync(async (req, res) => {
  const data = await userService.createUser(req.body);
  httpService.SUCCESS(res, data);
});
export default {createUser};
