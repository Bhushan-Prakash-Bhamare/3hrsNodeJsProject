const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const candyShopData = sequelize.define('candyShop', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      description:{
          type: Sequelize.STRING,
          allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
});
    
  
  module.exports = candyShopData;