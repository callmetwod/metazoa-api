import { Sequelize } from "sequelize";

// const sequelize = new Sequelize('metazoa', 'root', 'root',{
//     host: '',
//     dialect: 'mysql'
// })

const sequelize = new Sequelize('mysql://root:4Dc3AH6GgHbH2A4Bc45FHH3gHe6g6a5a@roundhouse.proxy.rlwy.net:35439/railway') 



async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export { sequelize, testConnection}