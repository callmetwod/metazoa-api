import { AgencyEntity } from "../entities/Agency.entity.js";
import { ERRORS, SUCCESS } from "../shared/messages.js";

export class AgencyService {
    async createAgencyService(name, address) {
        try {
            await AgencyEntity.sync();
            const agencyAlreadyExist = await AgencyEntity.findOne({
                where: {
                    name,
                    address
                }
            });

            // erro personalizado
            if (agencyAlreadyExist) {
                return `Agency ${ERRORS.ALREADY_EXIST}`;
            }

            const newAgency = await AgencyEntity.create({
                name, address
            });
            return `A Agencia ${newAgency.name} ${SUCCESS.CREATED} `;

        } catch (error) {
                return error;
        }
    }

    async getAgencyByNameService(name){
        try {const agency = await AgencyEntity.findOne({
            where:{
                name
            }
        })

        if (!agency) {
            return `Agency ${ERRORS.NOT_FOUND}`
        }

        return agency  

        } catch (error) {
            return error
        }
    }

    async getAllAgencyService(){
        return await AgencyEntity.findAll();
    }

    async updateAgencyAddressService(id, newAddress) {
        try {
         const AgencyExist = await AgencyEntity.findOne({
             where: {
                 id
             }
         });
 
         if (AgencyExist) {
             await AgencyEntity.update({ address: newAddress }, {
                 where: {
                     id
                 }
             });
 
             
             const updatedAgency = await AgencyEntity.findByPk(id)

             return `A Agencia ${updatedAgency.name} ${SUCCESS.UPDATED} novo endereço: ${updatedAgency.address}`
         }
 
         return `Agencia ${ERRORS.NOT_FOUND}`

        } catch (error) {
         return error
        }
     }

     async deleteAgencyService(id){
         try {
             const agencyExist = await AgencyEntity.findByPk(id)

             if (!agencyExist) {
                 return `Agency ${ERRORS.NOT_FOUND}`
             }

             await AgencyEntity.destroy({
                 where: {
                     id 
                 }
             })

             return `A Agencia ${agencyExist.name} ${SUCCESS.DELETED}`
             
         } catch (error) {
             return error
         }
     }

}
