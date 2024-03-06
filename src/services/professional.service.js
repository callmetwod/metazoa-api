import { ProfessionalEntity } from "../entities/Professional.entity.js";
import { ERRORS, SUCCESS } from "../shared/messages.js";

export class ProfessionalService {
    async createProfessionalService(name, email, password) {
        try {
            await ProfessionalEntity.sync();
            const ProfessionalAlreadyExist = await ProfessionalEntity.findOne({
                where: {
                    name,
                    email
                }
            });

            // erro personalizado
            if (ProfessionalAlreadyExist) {
                return `Professional ${ERRORS.ALREADY_EXIST}`;
            }

            const newProfessional = await ProfessionalEntity.create({
                name, email, password
            });

            return newProfessional;

        } catch (error) {
                return error;
        }
    }

    async getProfessionalByNameService(name){
        try {const ProfessionalFindName = await ProfessionalEntity.findOne({
            where: {
                name
            }
        })

        if(!ProfessionalFindName){
            return `Professional ${ERRORS.NOT_FOUND}`;   
        }

        return ProfessionalFindName

      } catch (error) {
        return error
      }
    }

    async getAllProfessionalService(){
        const allProfessionals = await ProfessionalEntity.findAll();
        return allProfessionals;
    }

    async updatePasswordService (id, newPassword) {
        try {
         const userExist = await ProfessionalEntity.findByPk(id)
 
         if (userExist) {
             await ProfessionalEntity.update({ password: newPassword }, {
                 where: {
                     id
                 }
             });
 
             
             const updatedProfessional = await ProfessionalEntity.findByPk(id)

             return updatedProfessional
         }
 
         return `Usuário ${ERRORS.NOT_FOUND}`
        } catch (error) {
         return error
        }
     }

     async deleteProfessionalService(id){
        try {
            const professionalExist = await ProfessionalEntity.findByPk(id)

            if (!professionalExist) {
                return `Professional ${ERRORS.NOT_FOUND}`;
            }

            await ProfessionalEntity.destroy({
                where: {
                    id
                }
            })

            return `Professional ${SUCCESS.DELETED}`    
        } catch (error) {
            return error
        }
     }
}