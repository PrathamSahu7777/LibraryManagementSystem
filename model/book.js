const {  DataTypes } = require('sequelize');
const {sequelize} = require("../utils/db")
// Define a model
const Book = sequelize.define('Book', {
  book_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  availability: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
},
{
   tableName: "books",
   timestamps: false
}
);

// Sync the model with the database
sequelize.sync({
    force: false
})
  .then(() => console.log('Database & tables created!'))
  .catch((err) => console.error('Error syncing:', err));

module.exports = Book;