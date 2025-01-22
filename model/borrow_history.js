const {  DataTypes } = require('sequelize');
const {sequelize} = require("../utils/db")
// Define a model
const Borrow_History = sequelize.define('Borrow_History', {
  borrow_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  borrow_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  deadline: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  return_status: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }},
{
   tableName: "borrow_history",
   timestamps: false
}
);

// Sync the model with the database
sequelize.sync({
    force: false
})
  .then(() => console.log('Database & tables created!'))
  .catch((err) => console.error('Error syncing:', err));

module.exports = Borrow_History;