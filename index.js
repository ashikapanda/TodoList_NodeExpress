import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path"
import { fileURLToPath } from "url";

const app = express();
const port = 3000;


let todayObj={list: '', items:[]};
let workObj= {list:'', items:[]}
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("today.ejs", todayObj);
});

app.post("/", (req, res)=> {
  console.log("req---",req)
  todayObj.list = req.body.list
  todayObj.items.push(req.body.newItem)
  console.log("lis", todayObj)
  res.render("today.ejs", todayObj)
})

app.get("/work", (req, res)=> {
  res.render("work.ejs", workObj)
})

app.post("/work", (req, res)=> {
  workObj.list = req.body.list
  workObj.items.push(req.body.newItem)
  res.render("work.ejs", workObj)
})
app.listen(port, function () {
  console.log(`listening to port ${port}`);
});
