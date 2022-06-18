// import library
const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');
// implementasi
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// import model
const model = require('../models/index');
const pelamar = model.pelamar

// import auth
const auth = require("../auth")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "BelajarNodeItuMenyenangkan"


// endpoint get pelamar
app.get("/", (req, res) => {
    pelamar.findAll()
        .then(pelamar => {
            res.json({
                count: pelamar.length,
                pelamar: pelamar
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

// endpoint add pelamar
app.post("/", (req, res) => {
    let data = {
        nama_pelamar: req.body.nama_pelamar,
        username_pelamar: req.body.username_pelamar,
        password_pelamar: md5(req.body.password_pelamar),
        kontak_pelamar: req.body.kontak_pelamar,
        alamat_pelamar: req.body.alamat_pelamar,
        pen_akhir: req.body.pen_akhir,
    }

    pelamar.create(data)
        .then(result => {
            res.json({
                message: "data has been interested"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

// endpoint update pelamar
app.put("/:id", auth, (req, res) => {
    let param = {
        id_pelamar: req.params.id
    }
    let data = {
        nama_pelamar: req.body.nama_pelamar,
        username_pelamar: req.body.username_pelamar,
        password_pelamar: md5(req.body.password_pelamar),
        kontak_pelamar: req.body.kontak_pelamar,
        alamat_pelamar: req.body.alamat_pelamar,
        pen_akhir: req.body.pen_akhir,
    }
    pelamar.update(data, { where: param })
        .then(result => {
            res.json({
                message: "data has been updated"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

// endpoint delete pelamar
app.delete("/:id", (req, res) => {
    let param = {
        id_pelamar: req.params.id
    }

    pelamar.destroy({ where: param })
        .then(result => {
            res.json({
                message: "data has been deleted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

// endpoint login pelamar
app.post("/auth", async (req, res) => {
    let data = {
        username_pelamar: req.body.username_pelamar,
        password_pelamar: md5(req.body.password_pelamar)
    }

    let result = await pelamar.findOne({ where: data })
    if (result) {
        //set payload from data
        let payload = JSON.stringify(result)
        //generete token based on payload and SECRET_KEY
        let token = jwt.sign(payload, SECRET_KEY)

        res.json({
            logged: true,
            data: result,
            token: token
        })
    }
    else {
        res.json({
            logged: false,
            massage: "Invalid Username or Password"
        })
    }
})

module.exports = app