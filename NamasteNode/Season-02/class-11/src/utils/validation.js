const validator = require("validator");
const bcrypt = require("bcrypt");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName || !emailId || !password) {
    throw new Error(
      "First name, Last name, Email and Password must be provided"
    );
  } else if (!validator.isEmail(emailId)) {
    throw new Error("Email is not valid");
  } else if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not Strong");
  }
};

const validateProfileEditData = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "emailId",
    "age",
    "gender",
    "photoUrl",
    "about",
    "skills",
  ];

  const data = req.body;

  const isEditAllowed = Object.keys(data).every((key) =>
    allowedEditFields.includes(key)
  );

  return isEditAllowed;

  // ----- we can write with if statment and no need to return it -----
  // if (!isEditAllowed) {
  //   throw new Error("Edit not allowed");
  // }
};

const validatePasswordUpdate = async (req) => {
  console.log(req.body);
  const { currentPassword, newPassword } = req.body;

  const user = req.user;
  console.log(user);

  const isCurrentPasswordCorrect = await user.validatePassword(currentPassword);

  if (!isCurrentPasswordCorrect) {
    throw new Error("Current Password is incorrect");
  }

  if (!validator.isStrongPassword(newPassword)) {
    throw new Error("New Password is not Strong");
  }

  const newPasswordHash = await bcrypt.hash(newPassword, 10);

  return newPasswordHash;

  // ----- we can also Update the user's password and save and return the updated user object here & in API just res.json({}) and no need to return newPaawordHash -----
  // user.password = passwordHash;
  // await user.save();
  // console.log(user);
  //  return user;
};

module.exports = {
  validateSignUpData,
  validateProfileEditData,
  validatePasswordUpdate,
};
