const db =require("../db");

class AuthorController {

    async newAuthor(req,res) {
        const {name} = req.body;
        const newAuthor = await db.query("INSERT into author (name_author) values($1) RETURNING *", [name]);
        res.json(newAuthor.rows);
    }

    async deleteAuthor(req,res) {
        const id = req.query.id;
        const deleteBook =  db.query("DELETE FROM author WHERE id_author = $1",[id]);
        res.json(deleteBook.rows);
    }

}

module.exports = new AuthorController();