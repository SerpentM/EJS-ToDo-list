const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
let items = ['Eat','Sleep','shit'];
let workItem = [];

app.use(express.static('public'));
app.get("/",(req,res)=>{
    let today = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric'};
    currentday = today.toLocaleDateString('en-US', options);
    res.render('list',{listTitle: currentday, addItem:items});
})
app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work List",addItem:workItem});
})


app.post("/",(req,res)=>{
    let item = req.body.newlist;
    console.log(req.body);
    if (req.body.button === "Work List"){
        workItem.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/")
    }
  
})


app.listen(3000, ()=>{
    console.log("server is up at Port 3000");
})