const express = require('express')
const dotenv = require("dotenv")

const bookRouter = require("./router/bookRouter.js")
const authorRouter = require("./router/authorRouter.js")
const borrow_historyRouter = require("./router/borrow_historyRouter.js")
const memberRouter = require("./router/memberRouter.js")
const association = require("./model/association.js")
const Book = require("./model/book.js")
const Author = require("./model/author.js")
const Member = require("./model/member.js")
const Borrow_History = require("./model/borrow_history.js")

dotenv.config();

const app = express()
const port = 3000

app.use(express.json());

app.use("/api/book",bookRouter);
app.use("/api/author",authorRouter);
app.use("/api/member",memberRouter);
app.use("/api/borrow_history",borrow_historyRouter);

association({Book,Author,Member,Borrow_History});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})