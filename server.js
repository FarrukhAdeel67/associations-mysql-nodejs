const express = require("express");
const port  =5000;
const app = express();
const db = require("./models");
app.use(express.json());
db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log("server is running at port 5000");
    })
}).catch((err)=>{
    console.log(err);
})


console.log("Allah HO Akbar")