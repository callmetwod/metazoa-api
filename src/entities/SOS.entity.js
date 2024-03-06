import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const SOSEntity = database.define('SOS', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING(20),
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false
    }

});

export { SOSEntity }