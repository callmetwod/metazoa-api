import { AnimalEntity } from "../entities/Animal.entity.js";
import { AnimalService } from "../services/animal.service.js";

const instanceServiceAnimal = new AnimalService();

const createAnimal = async (req, res) => {
  const { name, race, age, injured, for_adoption } = req.body;
  const newAnimal = await instanceServiceAnimal.createAnimalService(
    name,
    race,
    age,
    injured,
    for_adoption
  );
  res.status(201).json({
    newAnimal,
  });
};

const getAllAnimals = async (req, res) => {
  const animals = await instanceServiceAnimal.getAllAnimalService();
  res.json({ animals });
};

const getAnimalByName = async (req, res) => {
  const { name } = req.body;
  const animalFind = await instanceServiceAnimal.getAnimalbyNameService(name);
  res.json({ animalFind });
};

const updateAnimal = async (req, res) => {
  const { id } = req.params;
  const { injured } = req.body;
  const updatedAnimal = await instanceServiceAnimal.updateInjuredAnimal(
    id,
    injured
  );
  res.json({ updatedAnimal });
};

const deleteAnimal = async (req, res) => {
  const { id } = req.params;
  const deletedAnimal = await instanceServiceAnimal.deleteAnimalService(id);
  res.json({ deletedAnimal });
};

export {
  createAnimal,
  getAllAnimals,
  getAnimalByName,
  deleteAnimal,
  updateAnimal,
};
