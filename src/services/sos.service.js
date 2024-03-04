import { SOSEntity } from "../entities/SOS.entity.js";

export class SOSService {
    async createSOSService(name, email, phone, address) {
        try {
            await SOSEntity.sync();
            const SOSAlreadyExist = await UserEntity.findOne({
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
            return await SOSEntity.findAll();
    }
}