import { Router } from "express";
import { 
    createProfessional, getAllProfessionals, getProfessionalByName, deleteProfessional, updatePassword
 } from "../controllers/professional.controller.js";

const professionalRoute = Router();

professionalRoute.post("/new-professional", createProfessional);

professionalRoute.get("/professionals", getAllProfessionals);

professionalRoute.patch("/update-professional/:id", updatePassword);

professionalRoute.get("/professional-find-name", getProfessionalByName);

professionalRoute.delete("/delete-professional/:id", deleteProfessional);

export { professionalRoute }