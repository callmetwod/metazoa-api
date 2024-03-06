import { AgencyEntity } from "../entities/Agency.entity.js";
import { AgencyService } from "../services/agency.service.js";

const instanceServiceAgency = new AgencyService();

const createAgency = async (req, res) => {
  const { name, address } = req.body;
  const newAgency = await instanceServiceAgency.createAgencyService(name, address)
  res.status(200).json({ newAgency });
};

const getAllAgencies = async (req, res) => {
  const agencies = await instanceServiceAgency.getAllAgencyService();
  return res.json({ agencies });
};

const getAgencyByName = async (req, res) => {
  const { name } = req.body;
  const Agency = await instanceServiceAgency.getAgencyByNameService(name);
  return res.json({ Agency });
};

const updateAgencyAddress = async (req, res) => {
  const { id } = req.params;
  const { address } = req.body;
  const updatedAgency = await instanceServiceAgency.updateAgencyAddressService(
    id,
    address
  )
  return res.json({ updatedAgency });
}

const deleteAgency = async (req, res) => {
  const { id } = req.params;
  const deletedAgency = await instanceServiceAgency.deleteAgencyService(id);
  res.json({ deletedAgency });
};

export { createAgency, getAllAgencies, getAgencyByName, deleteAgency, updateAgencyAddress };
