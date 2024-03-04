const instanceServiceSOS = new SOSService();

const createSOS = async (req, res) => { const { name, email, password } = req.body; const newSOS = await instanceServiceSOS.createSOSService(name, email, password); return res .status(201) .json({ message: "SOS criado com sucesso!", newSOS }); }

const getAllSOS = async (req, res) => { const SOSs = instanceServiceSOS.getAllSOSService(); return res.json({ SOSs }); }

const getSOSByName = async (req, res) => { const { name } = req.body; const SOSFindName = await SOSEntity.findOne({ where: { name } }); return res.json({ SOSFindName }); }

const updatePassword = async (req, res) => { const { id } = req.params; const { newPassword } = req.body;

const SOSAlreadyExist = await SOSEntity.findOne({
    where: {
        id
    }
});

if (SOSAlreadyExist) {
    return res.json({ message: `SOS ${ERRORS.NOT_FOUND}` });
}

await SOSEntity.update({ password: newPassword }, {
    where: {
        id
    }
});
const messageUpdate = await SOSEntity.findByPk(id)
return res.json({ messageUpdate });
}

const deleteSOS = async (req, res) => { const { id } = req.params; await SOSEntity.destroy({ where: { id } }); return res.json({ message: SOS ${SUCCESS.DELETED} }); }

export { createSOS, getAllSOS, getSOSByName, updatePassword, deleteSOS }