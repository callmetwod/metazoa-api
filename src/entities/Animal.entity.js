import { Sequelize, DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

const AnimalEntity = database.define('Animal', {
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
    race: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    injured: {
        type: DataTypes.BOOLEAN,
        allowNull: false    
    },
    for_adoption: {
        type: DataTypes.BOOLEAN,
        allowNull: false    
    }
});

export { AnimalEntity }