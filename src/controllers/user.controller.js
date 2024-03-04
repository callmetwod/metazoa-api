import { UserEntity } from "../entities/User.entity.js";
import { UserService } from "../services/user/user.service.js";

const instanceServiceUser = new UserService();

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = await instanceServiceUser.createUserService(name, email, password);
    return res
        .status(201)
        .json({
            message: "Usuário criado com sucesso!",
            newUser
        });
}

const getAllUsers = async (req, res) => {
    const users = instanceServiceUser.getAllUserService();
    return res.json({ users });
}

const getUserByName = async (req, res) => {
    const { name } = req.body;
    const UserFindName = await UserEntity.findOne({
        where: {
            name
        }
    });
    return res.json({ UserFindName });
}

const updatePassword = async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;

    const userAlreadyExist = await UserEntity.findOne({
        where: {
            id
        }
    });

    if (userAlreadyExist) {
        return res.json({ message: `Usuario ${ERRORS.NOT_FOUND}` });
    }

    await UserEntity.update({ password: newPassword }, {
        where: {
            id
        }
    });
    const messageUpdate = await UserEntity.findByPk(id)
    return res.json({ messageUpdate });
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    await UserEntity.destroy({
        where: {
            id
        }
    });
    return res.json({
        message: `Usuario ${SUCCESS.DELETED}`
    });
}

export { createUser, getAllUsers, getUserByName, updatePassword, deleteUser }