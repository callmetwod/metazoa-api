import { Sequelize } from "sequelize";

const sequelize = new Sequelize('metazoa', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})
async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export { sequelize, testConnection}