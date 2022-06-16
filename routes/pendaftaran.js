//import library
const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');

//import model
const model = require('../models/index');
const pendaftaran = model.pendaftaran

//import auth
const auth = require("../auth")
// const jwt = require("jsonwebtoken")
// const SECRET_KEY = "BelajarNodeJSItuMenyengankan"

//implementasi
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//endpoint menampilkann semua data pendaftaran, METHOD: GET, function: findALL()
app.get("/", (req, res) => {
    pendaftaran.findAll()
    .then(pendaftaran => {
        res.json({
            count: pendaftaran.length,
            pendaftaran: pendaftaran
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

// //endpoint menampilkann data pendaftaran sesuai id, METHOD: GET, function: findALL()
// app.get("/:customer_id", async (req, res) =>{
//     let param = { customer_id: req.params.customer_id}
//     let result = await transaksi.findAll({
//         where: param,
//         .then(pendaftaran => {
//             res.json({
//                 count: pendaftaran.length,
//                 pendaftaran: pendaftaran
//             })
//         })
//         .catch(error => {
//             res.json({
//                 message: error.message
//             })
//         })
//     })
//     res.json({
//         transaksi: result
//     })
// })

//endpoint untuk menyimpan data pendaftaran, METHOD: POST, function: create
app.post("/", (req,res) => {
    let data = {
        id_admin: req.body.id_admin,
        tgl_daftar: req.body.tgl_daftar
    }

    pendaftaran.create(data)
    .then(result => {
        res.json({
            massage: "data has been inserted"
        })
    })
    .catch(error => {
        massage: error.massage
    })
})

//endpoint menghapus data admin, METHOD: DELETE, function: destroy
app.delete("/:id", (req,res) => {
    let param = {
        id_pendaftaran : req.params.id
    }
    pendaftaran.destroy({where: param})
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