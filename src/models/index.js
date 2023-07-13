const Sequelize = require("sequelize");
const CatModel = require("./cats"); //contains the definition of the 'Cat' model

const setUpDatabase = () => {
  const connection = new Sequelize("have_i_fed_the_cat_app", "root", "password" {
    host: "localhost",
    port: 3307,
    dialect: "postgres"
  })

  const Cat = CatModel(connection, Sequelize);

  connection.sync({alter: true})
  return { Cat };
}

module.exports = setUpDatabase();


//this code sets up a connection to a database usin Sequelize (an Object-Relational 
//mapping (ORM) libray for Node.js)
// inside the setUpDatabase we are creating a new instance of 'Sequelize' class
// the constructor function takes a few parameters -> the name of the database, the username 
//used to connect to the database and password for the database user;
//it also specifies additional configuration options for the connection using an object
// host - specifies that the database is runnning on the local machine
//port - specifies the port no on which the database is listening
//dialect - specifies that the database is using the postgreSQL dialect
// it invokes the 'CatModel' function with the connection and sequelize params to create the cat model - this functions
//returns the defined 'cat' model based on the provided sequelize connection and data types
//connection.sync - the sync method on the connection object synchronizes the database
//schema with the defined models. The alter:true option tells Sequlize to alter tables
//to match the models if any changes are detected -> it can add new models or modify 
//existing columns
//finally the function returns an empty object
//this code sets up a database connection using Sequelize, defines the Cat model based on the CatModel module,
// synchronizes the schema with the models, and exports the configured database connection and the Cat model.
