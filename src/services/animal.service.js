import { AnimalEntity } from "../entities/Animal.entity.js";

export class AnimalService {
    async createAnimalService(name, race, age, injured, for_adoption) {
        try {
            await AnimalEntity.sync();
            const AnimalAlreadyExist = await AnimalEntity.findOne({
                where: {
                    name,
                    race
                }
            });

            // erro personalizado
            if (AnimalAlreadyExist) {
                return `Animal ${ERRORS.ALREADY_EXIST}`;
            }

            const newAnimal = await AnimalEntity.create({
                name, race, age, injured, for_adoption
            });
            return newAnimal;
        } catch (error) {
                return error;
        }
    }
    async getAllAnimalService(){
            return await AnimalEntity.findAll();
    }
}