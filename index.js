//import
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

app.use(express.static(__dirname))

//endpoint admin
const admin = require('./routes/admin');
app.use("/admin", admin)

//endpoint pendaftaran
const pendaftaran = require('./routes/pendaftaran');
app.use("/pendaftaran", pendaftaran)

//endpoint pelamar
const pelamar = require('./routes/pelamar');
app.use("/pelamar", pelamar)

//run sarver
app .listen(8000, ()=>{
    console.log('server run on port 8000')
})