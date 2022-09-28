import { UserModel } from "../../models/index.js";

const createUser = (body) => {
  return UserModel(body).save();
};

export default { createUser };
