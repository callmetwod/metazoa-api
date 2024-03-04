import { ProfessionalEntity } from "../entities/Professional.entity.js";

export class ProfessionalService {
    async createProfessionalService(name, email, phone, address) {
        try {
            await ProfessionalEntity.sync();
            const ProfessionalAlreadyExist = await UserEntity.findOne({
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
                name, email, phone, address
            });
            return newProfessional;
        } catch (error) {
                return error;
        }
    }
    async getAllProfessionalService(){
            return await ProfessionalEntity.findAll();
    }
}