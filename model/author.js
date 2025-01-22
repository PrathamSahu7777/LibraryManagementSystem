const {  DataTypes } = require('sequelize');
const {sequelize} = require("../utils/db")

// Define a model
const Author = sequelize.define('Author', {
 author_id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
    autoIncrement: true
      },
 name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
},
{
   tableName: "authors",
   timestamps: false
}
);

// Sync the model with the database
sequelize.sync({
    force: false
})
  .then(() => console.log('Database & tables created!'))
  .catch((err) => console.error('Error syncing:', err));

module.exports = Author;