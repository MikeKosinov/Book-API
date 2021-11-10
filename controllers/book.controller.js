const db =require("../db");

class BookController {

    async newBook(req,res) {
        const {name, authorId, creationDate} = req.body;
        const newBook = await db.query("INSERT into book (book_name,author_id,creation_date) values($1,$2,$3) RETURNING *", [name, authorId, creationDate]);
        res.json(newBook.rows);
    }

    async getBook(req,res){
        const id = req.params.id;
        const book = await db.query("SELECT*FROM book WHERE book_id = $1",[id]);
        res.json(book.rows);
          }

    async deleteBook(req,res) {
        const id = req.query.id;
        const deleteBook =  db.query("DELETE FROM public.book WHERE book_id = $1",[id]);
        res.json(deleteBook.rows);
    }
}

module.exports = new BookController()