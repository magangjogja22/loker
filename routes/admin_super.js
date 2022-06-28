const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');

//import model
const model = require('../models/index');
const admin_super = model.admin_super

//import auth
const auth = require("../auth")
const jwt = require("jsonwebtoken")
const SECRET_KEY = "BelajarNodeJSItuMenyengankan"

//implementasi
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", auth, (req,res)=> {
    admin_super.findAll()
    .then(admin_super => {
        res.json({
            count: admin_super.length,
            admin_super: admin_super
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })
})

app.post("/",auth, (req,res) => {
    let data = {
        id_pelamar : req.body.id_pelamar,
        id_admin : req.body.id_admin,
        id_loker : req.body.id_loker,
        id_pendaftaran : req.body.id_pendaftaran,
        username_admin_super: req.body.username_admin_super,
        password_admin_super: md5(req.body.password_admin_super),
    }

    admin_super.create(data)
    .then(result => {
        res.json({
            massage: "data has been inserted",
            result: data
        })
    })
    .catch(error => {
        massage: error.massage
    })
})

app.put("/:id", auth, (req,res)=> {
    let param = {
        id_admin_super : req.params.id 
    }
    let data = {
        id_pelamar : req.body.id_pelamar,
        id_admin : req.body.id_admin,
        id_loker : req.body.id_loker,
        id_pendaftaran : req.body.id_pendaftaran,
        username_admin_super: req.body.username_admin_super,
        password_admin_super: md5(req.body.password_admin_super),
    }
    admin_super.update(data, {where: param})
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

app.delete("/:id",auth, (req,res) => {
    let param = {
        id_admin_super : req.params.id
    }
    admin_super.destroy({where: param})
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
app.post("/login", async (req,res) => {
    let data = {
        username_admin_super : req.body.username_admin_super,
        password_admin_super : md5(req.body.password_admin_super)
    }

    let result = await admin_super.findOne({where: data})
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