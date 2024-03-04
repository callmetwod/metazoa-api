import { AgencyEntity } from "../entities/Animal.entity.js";

export class AgencyService {
    async createAgencyService(name, address) {
        try {
            await AgencyEntity.sync();
            const AgencyAlreadyExist = await AgencyEntity.findOne({
                where: {
                    name,
                    adress
                }
            });

            // erro personalizado
            if (AgencyAlreadyExist) {
                return `Agency ${ERRORS.ALREADY_EXIST}`;
            }

            const newAgency = await AgencyEntity.create({
                name, address
            });
            return newAgency;
        } catch (error) {
                return error;
        }
    }
    async getAllAgencyService(){
            return await AgencyEntity.findAll();
    }
}
