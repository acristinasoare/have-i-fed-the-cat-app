const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const schema = {
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    markings: DataTypes.STRING,
    lastfed: DataTypes.DATE,
  };

  return sequelize.define("Cat", schema);
};

//function exported takes 2 parameters that represent the sequelize instance
//and the DataTypes object from Sequelize -> required to deifne the model
//inside the exported function it defines a schema object that represents the
//structure of the cat model
//each property in the schema object a column in the corresponding database table
//the sequelize.define method takes two arguments: the name of the model/table and the
//schema object --> this method creates a new Sequelize model using the provided schema
// and returns the model
