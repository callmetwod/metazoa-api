import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const ProfessionalEntity = database.define('Professional', {
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
    password: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
});

export { ProfessionalEntity }