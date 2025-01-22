
const {pool} = require("../utils/db")

const insertBooks = async (req, res) => {
    
    const {title, genre, availability,author_id} = req.body;
    const values = [title,genre,availability,author_id];
    const q = "insert into books (title,genre,availability, author_id) values (?,?,?,?)";

    pool.query(q,values,(err,data) => {
        if(err){
          return res.status(500).send(err);
        }
		res.status(201).json("Book inserted");
      })
    
};

const getAllBooks = async (req, res) => {

    
    const q = "select * from books";

    pool.query(q,(err,data) => {
        if(err){
          return res.status(500).send(err);
        }
        res.status(201).json(data);
      }
      )
    
};

const getBookByAuthId = async(req,res)=>{
	const authId = req.params.author_id ;
	const query = `SELECT books.title FROM books INNER JOIN authors ON books.author_id = ${authId}`;
	pool.query(query,(error , result)=>{
		if(error){
			return res.status(500).send(error);
		}
		else{
			res.status(200).send(result);
		}
	});
};

const getBookByAuthName = async(req,res)=>{
	const author_name = req.params.author_name ;
	const query = `SELECT books.title
FROM books
INNER JOIN authors ON books.author_id = authors.author_id
WHERE authors.name = ${author_name};`;
	pool.query(query,(error , result)=>{
		if(error){
			return res.status(500).send(error);
		}
		else{
			res.status(200).send(result);
		}
	});
};

const totalBooksByGenre = async(req,res)=>{
	const genre_type = req.params.genre_type ;
	const query = `SELECT count(title) as "No of Books" from books where books.genre =  ${genre_type };`;
	pool.query(query,(error , result)=>{
		if(error){
			return res.status(500).send(error);
		}
		else{
			res.status(200).send(result);
		}
	});
};


const search = async (req,res) => {
  
const title = req.query.title;
const author = req.query.author;
const genre = req.query.genre;

let q = "select books.title from books inner join authors on books.author_id = authors.author_id where ";

if(title){
	q += `books.title="${title}"`;
}
if(author){
	if(title) q += " or "
	q += `authors.name="${author}"`;
}
if(genre){
	if(title || author) q += " or "
	q += `books.genre="${genre}"`;
}

pool.query(q,(error , result)=>{
	if(error){
		return res.status(500).send(error);
	}
	if(result.length>0){
		res.status(200).send(result);
	}else{
		res.status(404).send("No Books Found");
	}
});


}





module.exports = {insertBooks, getAllBooks, getBookByAuthId, getBookByAuthName, totalBooksByGenre, search};





