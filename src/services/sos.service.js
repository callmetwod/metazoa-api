import { SOSEntity } from "../entities/SOS.entity.js";
import { ERRORS, SUCCESS } from "../shared/messages.js";

export class SOSService {
    async createSOSService(name, email, phone, address) {
        try {
            await SOSEntity.sync();
            const SOSAlreadyExist = await SOSEntity.findOne({
                where: {
                    name,
                    email
                }
            });

            // erro personalizado
            if (SOSAlreadyExist) {
                return `SOS ${ERRORS.ALREADY_EXIST}`;
            }

            const newSOS = await SOSEntity.create({
                name, email, phone, address
            });
            
            return newSOS;
        } catch (error) {
                return error;
        }
    }
    
    async getAllSOSService(){
        const SOSs = await SOSEntity.findAll();
        return SOSs
    }

    async getSOSbyNameService(name){
        try {
            const SOS = await SOSEntity.findOne({
            where: { name }
            })

            if (!SOS) {
            return `SOS ${ERRORS.NOT_FOUND}`;
            }
            
            return SOS
        
        } catch (error) {
            return error
        }
    }
    
    async deleteSOSService(id){
        try {
            const SOS = await SOSEntity.findOne({
                where: { id }
            })

            if (!SOS) {
                return `SOS ${ERRORS.NOT_FOUND}`;
            }

            await SOSEntity.destroy({
                where: { id }
            })

            return `SOS ${SUCCESS.DELETED}`

        } catch (error) {
            return error
        }
    }

    async updatePhoneService(id, newPhone) {
        try {
         const SOSExist = await SOSEntity.findOne({
             where: {
                 id
             }
         });
 
         if (SOSExist) {
             await SOSEntity.update({ phone: newPhone }, {
                 where: {
                     id
                 }
             });
 
             
             const updatedSOS = await SOSEntity.findByPk(id)
             return updatedSOS
         }
 
         return `SOS ${ERRORS.NOT_FOUND}`
        } catch (error) {
         return error
        }
     }
}




