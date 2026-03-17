constexpress=require("express");
constsqlite3=require("sqlite3").verbose();

constapp=express();
constdb=newsqlite3.Database(":memory:");

app.get("/user", (req,res) => {
constusername=req.query.username;

constquery="SELECT * FROM users WHERE username = '"+username+"'";

db.all(query, [], (err,rows) => {
if (err) {
res.status(500).send(err.message);
        }else {
res.json(rows);
        }
    });
});

app.listen(3000, () => {
console.log("Server running on port 3000");
});