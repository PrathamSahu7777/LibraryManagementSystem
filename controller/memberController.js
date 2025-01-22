const {pool} = require("../utils/db")

const createMember = async(req,res)=>{
    const { name, contact_info } = req.body;
    const query =
        "INSERT INTO members (name, contact_info) VALUES (?, ?)";
    pool.query(query, [name, contact_info], (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send({ author_id: result.insertId });
    });
}

const getMembers = async(req,res)=>{
    const query =
        "SELECT * from members";
    pool.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.status(201).send( {result} );
    });
}

module.exports = {createMember, getMembers};