const express = require("express");
const router = express.Router();
const db = require("../models");
router.post ("/post", async (req,res)=>{
    try{
        const {text, UserId} = req.body;
        const userpost = await db.Post.create({
            text,
            UserId
        });
        res.status(200).send({userpost})

    }catch(err){
        console.log(err);
        res
        .status(err.status ||500)
        .send(err.message || "something went wrong!")
    }
});
router.get ("/find/:id", async (req,res)=>{
    try{
        const {id} = req.params;
        console.log(id);
        const userpost = await db.Post.findAll({
            where: {
            UserId:id,
           },
           include:[db.User],
        });
        res.status(200).send({userpost});

    }catch(err){
        console.log(err);
        res
        .status(err.status ||500)
        .send(err.message || "something went wrong!")
    }
});

module.exports = router;
