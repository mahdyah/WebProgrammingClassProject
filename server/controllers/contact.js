const { db } = require("../db");

const contact = (req , res) => {
     
   
  
    const q = "INSERT INTO contact(`name` ,`useremail` , `message`) VALUES (?)"

    const values = [
            req.body.name,
            req.body.useremail,
            req.body.message,
    ]
    db.query(q,[values], (err,data) => {
        if(err) return res.status(500).json(err);
        return res.json("Message Send")
    })
   
   
  
}
module.exports={contact}