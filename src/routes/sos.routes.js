import { Router } from "express";
import { 
    createSOS, getAllSOS, getSOSByName, deleteSOS, updateSOSPhone
 } from "../controllers/sos.controller.js";

const SOSRoute = Router();

SOSRoute.post("/new-SOS", createSOS);

SOSRoute.get("/SOSs", getAllSOS);

SOSRoute.get("/SOS-find-name", getSOSByName);

SOSRoute.delete("/delete-SOS/:id", deleteSOS);

SOSRoute.patch("/update-phone/:id", updateSOSPhone);

export { SOSRoute }