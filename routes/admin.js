//import library
const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');

//import model
const model = require('../models/index');
const admin = model.admin

//import auth
const auth = require("../auth")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "BelajarNodeJSItuMenyengankan"

//implementasi
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//endpoint menampilkann semua data admin, METHOD: GET, function: findALL()

app.get("/", (req,res)=> {
    admin.findAll()
    .then(admin => {
        res.json({
            count: admin.length,
            admin: admin
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

//endpoint untuk menyimpan data admin, METHOD: POST, function: create

app.post("/", (req,res) => {
    let data = {
        nama_admin : req.body.nama_admin,
        username_admin: req.body.username_admin,
        password_admin: md5(req.body.password_admin),
        regional: req.body.regional,
        kontak_admin: req.body.kontak_admin,
        alamat_admin: req.body.alamat_admin
    }

    admin.create(data)
    .then(result => {
        res.json({
            massage: "data has been inserted"
        })
    })
    .catch(error => {
        massage: error.massage
    })
})

//endpoint mengupdate data admin, METHOD: PUT, function: update

app.put("/:id", auth, (req,res)=> {
    let param = {
        id_admin : req.params.id 
    }
    let data = {
        nama_admin : req.body.nama_admin,
        username_admin: req.body.username_admin,
        password_admin: md5(req.body.password_admin),
        regional: req.body.regional,
        kontak_admin: req.body.kontak_admin,
        alamat_admin: req.body.alamat_admin
    }
    admin.update(data, {where: param})
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

//endpoint menghapus data admin, METHOD: DELETE, function: destroy

app.delete("/:id", (req,res) => {
    let param = {
        id_admin : req.params.id
    }
    admin.destroy({where: param})
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

//endpoint login admin (authentication), METHOD: POST, Function: findOne
app.post("/auth", async (req,res) => {
    let data = {
        username_admin : req.body.username_admin,
        password_admin : md5(req.body.password_admin)
    }

    let result = await admin.findOne({where: data})
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