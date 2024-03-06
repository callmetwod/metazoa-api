import { Router } from "express";
import { 
    createAgency,
    getAllAgencies,
    getAgencyByName,
    deleteAgency,
    updateAgencyAddress
 } from "../controllers/agency.controller.js";

const agencyRoute = Router();

agencyRoute.post("/new-agency", createAgency);

agencyRoute.get("/agencies", getAllAgencies);

agencyRoute.get("/agency-find-name", getAgencyByName);

agencyRoute.patch("/update-address/:id", updateAgencyAddress);

agencyRoute.delete("/delete-agency/:id", deleteAgency);

export { agencyRoute }