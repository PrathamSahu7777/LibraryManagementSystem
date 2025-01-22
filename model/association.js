
const {sequelize} = require("../utils/db")


module.exports = (models) => {
  const { Author, Book, Borrow_History, Member } = models;

  // Define associations

  // One-to-many association: An Author can have many Books
  Author.hasMany(Book, { foreignKey: "author_id" });
  Book.belongsTo(Author, { foreignKey: "author_id" });

  // One-to-many association: A Book can have many BorrowHistories
  Book.hasMany(Borrow_History, { foreignKey: "book_id" });
  Borrow_History.belongsTo(Book, { foreignKey: "book_id" });

  // One-to-many association: A Member can have many BorrowHistories
  Member.hasMany(Borrow_History, { foreignKey: "member_id" });
  Borrow_History.belongsTo(Member, { foreignKey: "member_id" });

  // Sync the database once after the associations are defined
  sequelize.sync({ force: false }).then(() => {
    console.log("Database & tables created!");
  });
};