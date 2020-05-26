const express = require("express");
const dotenv = require("dotenv"); // config dosyası için dotenv indirilip dahil edildi.
const urunler = require("./routers/product");
const kategori = require("./routers/kategori");
const addItem = require("./routers/addItem");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDatabase = require("./helpers/database/connectDatabase");

// Environment Variables

// Dotenv normalde direk config içindeki yola bakacagı için projede env olşturduk yolunu verdim.

dotenv.config({
  path: "./src/config/env/config.env",
});

// MongoDb Connection

connectDatabase();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/urunler", urunler);
app.use("/kategori", kategori);
app.use("/urunEkleme", addItem);

app.listen(PORT, () => {
  console.log(`Server Çalışıyor ${PORT} : ${process.env.NODE_ENV} `);
});
