import UserModel from "../Models/UserModel.js";
import bcrypt from "bcrypt";
//get  a User
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("No such User Exists");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
//update a Use
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdmitStatus, password } = req.body;
  if (id === currentUserId || currentUserAdmitStatus) {
    try {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Access Denied! You can only update your own profile");
  }
};

//Delete User
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdmitStatus } = req.body;
  if (id === currentUserId || currentUserAdmitStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("User Deleted Successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.send(403).json("Access Denied! you can Only Delete your own Profile");
  }
};
//Follow a User
export const followUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (currentUserId === id) {
    res.status(403).json("Action Forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);
      if (!followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $push: { followers: currentUserId } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("user Followed");
      } else {
        res.status(403).json("User is Followed by You");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

//UnFollow a User
export const unFollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUserId } = req.body;
  if (currentUserId === id) {
    res.status(403).json("Action Forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUser = await UserModel.findById(currentUserId);
      if (followUser.followers.includes(currentUserId)) {
        await followUser.updateOne({ $pull: { followers: currentUserId } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("user UnFollowed");
      } else {
        res.status(403).json("User is not  Followed by You");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
