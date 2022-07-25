// import library
const bodyParser = require('body-parser');
const express = require('express');

// import model
const model = require('../models/index');
const loker = model.loker

// import auth
const auth = require("../auth")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "BelajarNodeJSItuMenyengankan"

// implementasi
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// endpoint get data loker
app.get("/", (req, res) => {
    loker.findAll()
        .then(loker => {
            res.json({
                count: loker.length,
                loker: loker
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})


// endpoint post data loker
app.post("/", (req, res) => {
    let data = {
        regional: req.body.regional,
        nama_loker: req.body.nama_loker,
        alamat_loker: req.body.alamat_loker,
        bidang: req.body.bidang,
        pendidikan_minimal: req.body.pen_min,
        gaji: req.body.gaji
    }

    loker.create(data)
        .then(result => {
            res.json({
                massage: "data has been inserted"
            })
        })
        .catch(error => {
            massage: error.massage
        })
})

// endpoint update data loker
app.put("/:id", auth, (req, res) => {
    let param = {
        id_loker: req.params.id
    }
    let data = {
        regional: req.body.regional,
        nama_loker: req.body.nama_loker,
        alamat_loker: req.body.alamat_loker,
        bidang: req.body.bidang,
        pendidikan_minimal: req.body.pen_min,
        gaji: req.body.gaji
    }
    loker.update(data, { where: param })
        .then(result => {
            res.json({
                massage: "data has been updated"
            })
        })
        .catch(error => {
            res.json({
                massage: error.massage
            })
        })
})

// endpoint delete data loker
app.delete("/:id", (req, res) => {
    let param = {
        id_loker: req.params.id
    }
    loker.destroy({ where: param })
        .then(result => {
            res.json({
                massage: "data has been deleted"
            })
        })
        .catch(error => {
            res.json({
                massage: error.massage
            })
        })
})

module.exports = app
