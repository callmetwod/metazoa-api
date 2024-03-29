import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const AgencyEntity = database.define('Agency', {
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
    address: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

export { AgencyEntity }