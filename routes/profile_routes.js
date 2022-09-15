const express = require("express");
const router = express.Router();
const db = require("../models");
router.post ("/profile", async (req,res)=>{
    try{
        const {name, UserId} = req.body;
        const userprofile = await db.Profile.create({
            name,
            UserId,
        });
        res.status(200).send({userprofile})

    }catch(err){
        console.log(err);
        res
        .status(err.status ||500)
        .send(err.message || "something went wrong!")
    }
});
router.get ("/find/:id", async (req,res)=>{
    try{
        const { id} = req.params;
        const userProfile = await db.Profile.findAll({
           where: {
            UserId:id,
           },
           include:[db.User],
        });
        res.status(200).send({userProfile});

    }catch(err){
        console.log(err);
        res
        .status(err.status ||500)
        .send(err.message || "something went wrong!")
    }
});

module.exports = router;

