const express = require("express");
const router = express.Router();
const db = require("../models");
router.post("/new", async (req, res) => {
  try {
    const { username } = req.body;
   const newUser =  await db.User.create({
      username,
    });
    res.status(200).send({ newuser: newUser });
  } catch (err) {
    res.status(500).send("something went wrong");
  }
});
router.get("/all", async (req, res)=>{

 try  {
    const {name} = req.body;
     const allUsers = await db.User.findAll({
        // where:{username:name},
        include: [ db.Post ],
     });
    res.status(200).send({allUsers})
}catch(err){
    console.log(err);
        res.status(500).send("something went wrong!")
    }
})
router.get("/one", async (req, res)=>{

    try  {
       const {name} = req.body;
        const allUsers = await db.User.findOne({
           where:{username:name},
           include: [ db.Post],
        });
       res.status(200).send({allUsers})
   }catch(err){
       console.log(err);
           res.status(500).send("something went wrong!")
       }
   })

module.exports = router;
