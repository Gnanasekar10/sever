
//  package imports
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRouter = require("./user-router");

const USERNAME = "sekarproject";
const PASSWORD = "sathyasekar";
const DB_NAME = "sample_db";
// const URI = mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.mcfdnaj.mongodb.net/${DB_NAME};
const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@samplecluster0.6xvtnos.mongodb.net/${DB_NAME}`;
mongoose.connect(URL);
mongoose.connection.on("connected", () => {
    console.log(`mongodb  DB NAME : ${DB_NAME}  is connected successfully`);
});

//  declaration
const app = express();
//  middle ware
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// routers
// TODO: add your routers below 👇
// eg: 🧑‍💻 ▶️ app.use('/like', likeRouter);
app.use('/song', userRouter);
app.all('/',(req,res)=> {
    res.send("app is working fine");
})
// exports
module.exports = app;
