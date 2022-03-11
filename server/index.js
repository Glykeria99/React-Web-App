import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import PostRouter from './routes/posts.js'


const app = express();
app.use(bodyParser.json({limit:"30mb",extended : true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended : true}));
app.use(cors());

const CONNECTION_URL = "mongodb+srv://glykeria:glykeria123@cluster0.dgvlb.mongodb.net/posts?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;



mongoose.connect(CONNECTION_URL, {useNewUrlParser: true})
    .then (() => app.listen(PORT,()=> console.log("server running")))
    .catch((error) => console.log(error.message));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
      });

app.use('/posts',PostRouter)  