import { UserEntity } from "../entities/User.entity.js";

export class UserService {
    async createUserService(name, email, password) {
        try {
            await UserEntity.sync();
            const userAlreadyExist = await UserEntity.findOne({
                where: {
                    name,
                    email
                }
            });

            // erro personalizado
            if (userAlreadyExist) {
                return `Usuario ${ERRORS.ALREADY_EXIST}`;
            }

            const newUser = await UserEntity.create({
                name, email, password
            });
            return newUser;
        } catch (error) {
                return error;
        }
    }
    async getAllUserService(){
            return await UserEntity.findAll();
    }
}