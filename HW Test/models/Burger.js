'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burgerType: DataTypes.STRING
  });
  return Burger;
}