import * as dotenv from "dotenv";
import sequelize from "databases";
import { User, Role } from "databases/models";
import { UserModel } from "databases/models/User";
import * as crypto from "crypto";
import otpGenerator from "otp-generator";
import { sendOTP } from "utils/email";
import { authenticator, totp } from "otplib";
dotenv.config();

const init = async () => {
  await sequelize.sync();

  await test();

  console.log("Finish load database.");
};

const addUser = async () => {
  const newUser = {
    email: "spm8",
    password: "123",
    fullName: "huynh",
  };

  const { email, password, fullName } = newUser;

  let data: UserModel;

  const [user, created] = await User.findOrCreate({
    where: {
      email,
    },
    defaults: {
      password,
      fullName,
    },
  });
  // await user.addRole(1);
  data = user;
  return data;
};

const addRole = async () => {
  await Role.create({ name: "customer" });
  await Role.create({ name: "admin" });
};

const test = async () => {
  // const user_role = await UserRole.findAll();

  // await addRole();
  // const user = await addUser();
  // console.log(user);
};

init();
