const {  DataTypes } = require('sequelize');
const {sequelize} = require("../utils/db")

// Define a model
const Member = sequelize.define('book', {
  member_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  contact_info: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
},
{
   tableName: "members",
   timestamps: false
}
);

// Sync the model with the database
sequelize.sync({
    force: false
})
  .then(() => console.log('Database & tables created!'))
  .catch((err) => console.error('Error syncing:', err));

module.exports = Member;