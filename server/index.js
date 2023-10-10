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
    const nome = req.body.name;
    const ra = req.body.ra;
    const email = req.body.email;
    const web = req.body.disciplinas.web;
    const mobile = req.body.disciplinas.mobile;
    const desktop = req.body.disciplinas.desktop;
    const games = req.body.disciplinas.games;
    const infra = req.body.disciplinas.infra;
    const seguranca = req.body.disciplinas.seguranca;
    const projetos = req.body.disciplinas.projetos;

    db.query("INSERT INTO research_form (nome, ra, email, web, mobile, desktop, games, infra, seg, projetos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [nome, ra, email, web, mobile, desktop, games, infra, seguranca, projetos], (err, result) => {
        if (err) {
            console.log(err)
        }
//        console.log(result)
    });
})



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})