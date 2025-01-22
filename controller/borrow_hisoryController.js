const {pool} = require("../utils/db")

const createBorrowHistory = async(req,res) => {
  
    const {book_id,member_id} = req.body;
    const values = [book_id,member_id];
    const q = "insert into borrow_history (borrow_date, deadline, return_status, book_id, member_id) values (CURRENT_DATE,DATE_ADD(CURRENT_DATE, INTERVAL 15 DAY),false,?,?)";

    pool.query(q,values,(err,data) => {
        if(err){
          return res.status(500).send(err);
        }
        res.status(201).json("Borrow date created");
      }
      )
}

const getOverDueBooks = async (req,res) => {
  
const member_id = req.params.member_id;
const q = `select books.title from books inner join borrow_history on books.book_id = borrow_history.book_id where CURRENT_DATE>deadline and return_status = false and member_id = ${member_id}`;

pool.query(q,(err,data) => {
  if(err){
    return res.status(500).send(err);
  }
  res.status(201).json(data);
}
)


}


module.exports = {createBorrowHistory, getOverDueBooks};