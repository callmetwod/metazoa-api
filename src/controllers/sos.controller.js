import {SOSService} from "../services/sos.service.js";
import { SOSEntity } from "../entities/SOS.entity.js";
import { SUCCESS, ERRORS } from "../shared/messages.js";

const instanceServiceSOS = new SOSService();

const createSOS = async (req, res) => {
    const { name, email, phone, address } = req.body; 
    const newSOS = await instanceServiceSOS.createSOSService(name, email, phone, address);
    res .status(201).json({ newSOS }); 
}

const getAllSOS = async (req, res) => { 
    const SOSs = await instanceServiceSOS.getAllSOSService(); 
    res.status(200).json({ SOSs }); 
}

const getSOSByName = async (req, res) => { 
    const { name } = req.body; 
    const SOSFindName = await instanceServiceSOS.getSOSbyNameService(name);
    res.status(200).json({ SOSFindName }); 
}


const deleteSOS = async (req, res) => { 
    const { id } = req.params; 
    const deletedSOS = await instanceServiceSOS.deleteSOSService(id);
    return res.status(200).json({ message: `${deletedSOS} ${SUCCESS.DELETED}` }); 
}

const updateSOSPhone = async (req, res) => {
    const { id } = req.params;
    const { phone } = req.body;
    const updatedSOS = await instanceServiceSOS.updatePhoneService(id, phone);
    res.status(200).json({ updatedSOS });
}

export { createSOS, getAllSOS, getSOSByName, deleteSOS, updateSOSPhone }