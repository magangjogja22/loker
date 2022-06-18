//import library
const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');

//import model
const model = require('../models/index');
const pendaftaran = model.pendaftaran

// //import auth
// const auth = require("../auth")
// const jwt = require("jsonwebtoken")
// const SECRET_KEY = "BelajarNodeJSItuMenyengankan"

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

//endpoint menampilkann data pendaftaran sesuai id, METHOD: GET, function: findALL()
app.get("/:id_pendaftaran", (req, res) =>{
    pendaftaran.findOne({where: {id_pendaftaran:req.params.id_pendaftaran}})
        .then(result => {
            res.json({
                pendaftaran: result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })  
})

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

// //endpoint login admin (authentication), METHOD: POST, Function: findOne
// app.post("/auth", async (req,res) => {
//     let data = {
//         id_pendaftaran : req.body.id_pendaftaran,
//     }

//     let result = await pendaftaran.findOne({where: data})
//     if (result) {
//         //set payload from data
//         let payload = JSON.stringify(result)
//         //generete token based on payload and SECRET_KEY
//         let token = jwt.sign(payload, SECRET_KEY)

//         res.json({
//             logged: true,
//             data: result,
//             token: token 
//         })
//     }
//     else {
//         res.json({
//             logged: false,
//             massage: "Invalid Username or Password"
//         })
//     }
// })

 module.exports = app