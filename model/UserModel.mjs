import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      // required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userProfile: {
      type: String,
      required: true,
      default: "8934579348573495734589.png",
    },
    emailVerify: {
      type: Boolean,
      required: true,
      default: false,
    },
    channelId: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      required: true,
      default: "user",
      // user, member, admin, manager, superAdmin
    },
    password: {
      type: String,
      default: null,
    },
    authToken: {
      type: String,
      required: true,
    },
    LoggedDevices: {
      type: Array,
      required: true,
    },
    sso: {
      type: Array,
      required: true,
      default: [
        {
          platform: "google",
          accountInfo: null,
        },
        {
          platform: "facebook",
          accountInfo: null,
        },
        {
          platform: "discord",
          accountInfo: null,
        },
        {
          platform: "microsoft",
          accountInfo: null,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", UserSchema);
export default User;
