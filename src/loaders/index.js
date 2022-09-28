import expressLoader from "./express.js";
import mongooseLoader from "./mongoose.js";

export default {
  expressLoader,
  mongooseLoader,
  init: async ({ expressApp }) => {
    await mongooseLoader();
    await expressLoader({ app: expressApp });
  },
};
