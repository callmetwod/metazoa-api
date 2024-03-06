import { ProfessionalEntity } from "../entities/Professional.entity.js";
import { ProfessionalService } from "../services/professional.service.js";

const instanceServiceProfessional = new ProfessionalService();

const createProfessional = async (req, res) => {
    const { name, email, password } = req.body;
    const newProfessional = await instanceServiceProfessional.createProfessionalService(name, email, password);
    return res
        .status(201)
        .json({
            newProfessional
        });
}

const getAllProfessionals = async (req, res) => {
    const professionals = await instanceServiceProfessional.getAllProfessionalService();
    return res.json({ professionals });
}

const getProfessionalByName = async (req, res) => {
    const { name } = req.body;
    const ProfessionalFindName = await instanceServiceProfessional.getProfessionalByNameService(name);
    return res.json({ ProfessionalFindName });
}

const deleteProfessional = async (req, res) => {
    const { id } = req.params;
    const deleteProfessional = await instanceServiceProfessional.deleteProfessionalService(id);
    return res.json({ deleteProfessional });
}

const updatePassword = async (req, res) => {
    const { id } = req.params;
    const { newPassword } = req.body;
    const updatedUser = await instanceServiceProfessional.updatePasswordService(id, newPassword);
    res.json({ updatedUser });
  };

export { createProfessional, getAllProfessionals, getProfessionalByName, deleteProfessional, updatePassword }