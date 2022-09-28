import { throwError } from "../../utils/error.js";
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      validate(value) {
        if (value.length < 4) {
          return throwError(
            "firstName length must be at least 4 characters long",
            "FORBIDDEN"
          );
        }
      },
    },
    lastName: {
      type: String,
      required: true,
      validate(value) {
        if (value.length < 4) {
          return throwError(
            "lastName length must be at least 4 characters long",
            "FORBIDDEN"
          );
        }
      },
    },
    imageUrl: {
      type: String,
      required: true,
      default:
        "https://i.pravatar.cc/300?u=e52552f4-835d-4dbe-ba77-b076e659774d",
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("Users", userSchema);

export { UserModel };
