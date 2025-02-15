const express = require('express')
const PORT = process.env.PORT || 3001;
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'bcb45b2cf00546',
    host: 'us-cdbr-east-04.cleardb.com',
    password: '1cf42285',
    database: 'heroku_3c7763526e153a6',
});

/* testing something - in theory it should work but it doesnt
app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    }
);*/

app.get("/", (req, res) => {
        res.send('testing2');
    }
);

// using -am instead of m?

app.put('/update', (req, res) => {
    const id = req.body.id
    const comments = req.body.comments

    db.query(
        "UPDATE new_reviews SET comments = ? WHERE id = ?",
        [comments, id], 
        (err, result) => {
            if (err) {
            console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

app.delete("/delete/:id", (req, res) => {
    const id = req.params.id

    db.query(
        "DELETE FROM new_reviews WHERE id = ?",
        id,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    )
})

app.get('/reviews', (req, res) => {
    db.query("SELECT * FROM new_reviews", (err,result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.post('/create', (req, res) => {
    const company = req.body.company;
    const position = req.body.position;
    const rating = req.body.rating;
    const start_month = req.body.start_month;
    const start_year = req.body.start_year;
    const end_month = req.body.end_month;
    const end_year = req.body.end_year;
    const comments = req.body.comments;

    db.query(
        "INSERT INTO new_reviews (company, position, rating, start_month, start_year, end_month, end_year, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?)", 
        [company, position, rating, start_month, start_year, end_month, end_year, comments], 
        (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("values inserted")
            }
        }
    )
});

app.listen(process.env.PORT || PORT, () => {
    console.log("server running on port ${PORT}");
}); 