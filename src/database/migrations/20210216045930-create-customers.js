'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("customers",{
      id: {
        type:Sequelize.INTEGER,
        allowNull:false, 
        autoIncrement: true,
        primaryKey:true,
      },
      name:{
        type:Sequelize.STRING, 
        allowNull:false,
      },
      email:{
        type: Sequelize.STRING,
        allowNull:false,
        unique:true,
      }
     })
    },

  down: queryInterface => {
   return queryInterface.dropTable("customers");
  }
};