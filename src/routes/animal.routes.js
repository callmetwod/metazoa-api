import { Router } from "express";
import { 
    createAnimal,
    getAllAnimals,
    getAnimalByName,
    deleteAnimal, 
    updateAnimal
 } from "../controllers/animal.controller.js";

const animalRoute = Router();

animalRoute.post("/new-animal", createAnimal);

animalRoute.get("/animals", getAllAnimals);

animalRoute.get("/animal-find-name", getAnimalByName);

animalRoute.patch ("/update-injured/:id", updateAnimal);

animalRoute.delete("/delete-animal/:id", deleteAnimal);

export { animalRoute }