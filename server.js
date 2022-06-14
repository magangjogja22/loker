const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-
parser
const cors = require("cors") // memanggil library cors
const app = express() // mengimplementasikan express

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())