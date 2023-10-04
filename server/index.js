const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req, res) => {
    db.query("SELECT * FROM research_form", (err, result) => {
        if (err) {
            console.log(err)
        }
        res.send(result)
    });
});


app.post('/api/create', (req, res) => {
    console.log(req)
    const nome = req.body.name;
    const ra = req.body.ra;
    const email = req.body.email;

    db.query("INSERT INTO research_form (nome, ra, email) VALUES (?, ?, ?)",[nome, ra, email], (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    });
})



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})