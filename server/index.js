const express = require('express');
const cookieParser = require('cookie-parser');
const multer = require('multer');

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const userRoute = require("./routes/contact");
const path= require('path')
const app = express();
app.use(express.json());
app.use(cookieParser());


const _dirname=path.dirname("")
const buildPath=path.join(_dirname,"../client/build")
app.use(express.static(buildPath))
app.get("/*",function(req,res){
  res.sendFile(
    path.join(_dirname,"../client/build/index.html"),
    function(err){
      if(err){
        res.status(500).send(err);
      }
    }
  )
})


// for image uplaods
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
const upload = multer({ storage });
app.post('/api/upload' , upload.single('file') , function (req,res) {
    const file = req.file
    res.status(200).json(file.filename)
})

app.use("/api/posts" , postRoute);
app.use("/api/auth" , authRoute);
app.use("/api/contact" , userRoute)
 

app.listen(8800, () => {
    console.log("Server is Running")
})
