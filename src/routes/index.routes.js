import { Router } from "express";
import { userRoute } from "./user.routes.js";
import { professionalRoute } from "./professional.routes.js";
import { animalRoute } from "./animal.routes.js";
import { agencyRoute } from "./agency.routes.js";
import { SOSRoute } from "./sos.routes.js";

const routes = Router();

routes.use(userRoute);
routes.use(professionalRoute);
routes.use(animalRoute);
routes.use(agencyRoute);
routes.use(SOSRoute);

export { routes }