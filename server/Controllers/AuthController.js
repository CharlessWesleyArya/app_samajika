import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
//Registering  a new user
export const registerUser = async (req, res) => {
  const { userName, password, firstName, lastName } = req.body;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new UserModel({
    userName,
    password: hashedPassword,
    firstName,
    lastName,
  });
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//login User
export const logInUser = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const user = await UserModel.findOne({ userName: userName });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      validity
        ? res.status(200).json(user)
        : res.status(400).json("wrong Password");
    } else {
      res.status(404).json("User does not Exists");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
