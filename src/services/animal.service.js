import { AnimalEntity } from "../entities/Animal.entity.js";
import {SUCCESS, ERRORS} from "../shared/messages.js"

export class AnimalService {
    async createAnimalService(name, race, age, injured, for_adoption) {
        try {
            await AnimalEntity.sync();
            const newAnimal = await AnimalEntity.create({
                name, race, age, injured, for_adoption
            });
            return {message: `O animal ${newAnimal.name}, ${SUCCESS.CREATED}`, newAnimal};
        } catch (error) {
                return error;
        }
    }
    async getAllAnimalService(){
            const allAnimals = await AnimalEntity.findAll();
            return allAnimals
    }

    async getAnimalbyNameService(name){
        try {
            const animal = await AnimalEntity.findOne({
            where: { name }
            })

            if (!animal) {
            return `Animal ${ERRORS.NOT_FOUND}`;
            }
            
            return animal
        
        } catch (error) {
            return error
        }
    }

    async updateInjuredAnimal(id, injured){
        const animal = await AnimalEntity.findOne({
            where: {
                id
            }
        });
    
        if (!animal) {
            return `O Animal ${ERRORS.NOT_FOUND}`;
        }
    
        await AnimalEntity.update({ injured }, {
            where: {
                id
            }
        });
        const updatedAnimal = await AnimalEntity.findByPk(id)
        return {message: `O animal ${updatedAnimal.name} ${SUCCESS.UPDATED}, injured: ${updatedAnimal.injured}`};
    }

    async deleteAnimalService(id){
        try {
            const animal = await AnimalEntity.findOne({
                where: { id }
            })

            if (!animal) {
                return `Animal ${ERRORS.NOT_FOUND}`;
            }

            await AnimalEntity.destroy({
                where: { id }
            })

            return `O Animal: ${animal.name} ${SUCCESS.DELETED}`

        } catch (error) {
            return error
        }
    }

}