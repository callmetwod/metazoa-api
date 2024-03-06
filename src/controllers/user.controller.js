import { UserEntity } from "../entities/User.entity.js";
import { UserService } from "../services/user.service.js";
import { SUCCESS, ERRORS } from "../shared/messages.js";

const instanceServiceUser = new UserService();

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await instanceServiceUser.createUserService(
    name,
    email,
    password
  );
  res.status(201).json({
    newUser,
  });
};

const getAllUsers = async (req, res) => {
  const allUsers = await instanceServiceUser.getAllUserService();
  res.status(200).json({ allUsers });
};

const getUserByName = async (req, res) => {
  const { name } = req.body;
  const userFound = await instanceServiceUser.getUserByName(name);
  res.json({ userFound });
};

const updatePassword = async (req, res) => {
  const { id } = req.params;
  const { newPassword } = req.body;
  const updatedUser = await instanceServiceUser.updatePassword(id, newPassword);
  res.json({ updatedUser });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deletedUser = await instanceServiceUser.deleteUser(id);
  res.json({ deletedUser });
};

export { createUser, getAllUsers, getUserByName, updatePassword, deleteUser };
