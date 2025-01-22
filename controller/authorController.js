const {pool} = require("../utils/db")

const createAuthor = async(req,res)=>{
    const { name, bio } = req.body;
	const query =
		"INSERT INTO authors (name, bio) VALUES (?, ?)";
	pool.query(query, [name, bio], (err, result) => {
		if (err) {
			return res.status(500).send(err);
		}
		res.status(201).send(result);
	});
}

module.exports = createAuthor;