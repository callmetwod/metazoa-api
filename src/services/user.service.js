import { UserEntity } from "../entities/User.entity.js";
import { ERRORS, SUCCESS } from "../shared/messages.js";

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
                return `O usuário ${name} ${ERRORS.ALREADY_EXIST}`;
            }

            const newUser = await UserEntity.create({
                name, email, password
            });
            return `O usuário ${newUser.name} ${SUCCESS.CREATED}`, newUser;
        } catch (error) {
            return error;
        }
    }
    //
    async getAllUserService() {
        const allUsers = await UserEntity.findAll();
        return allUsers
    };
    //
    async getUserByName(name) {
        try {
           const userFindName = await UserEntity.findOne({
                where: {
                    name
                }
            });

            if (userFindName) {
                return userFindName
            }
            
            return `O usuário ${name} ${ERRORS.NOT_FOUND}`
            
        } catch (error) {
            return error
        }
    };
    
    //
    async updatePassword(id, newPassword) {
       try {
        const userExist = await UserEntity.findOne({
            where: {
                id
            }
        });

        if (userExist) {
            await UserEntity.update({ password: newPassword }, {
                where: {
                    id
                }
            });

            
            const updatedUser = await UserEntity.findByPk(id)
            return updatedUser
        }

        return `Usuário ${ERRORS.NOT_FOUND}`
       } catch (error) {
        return error
       }
    }

    async deleteUser(id){
       try {
        const userExist = await UserEntity.findOne({
            where: {
                id
            }
        });

        console.log(userExist)  

        if (userExist) {
             await UserEntity.destroy({
            where: {
                id
            }

        });
        
        return `Usuário: ${userExist.name} ${SUCCESS.DELETED}`

        }

        return `Usuário ${ERRORS.NOT_FOUND}`
        
       } catch (error) {
         return error
       }
    }

}