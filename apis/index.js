const express = require('express');
const multer = require('multer');
const cors = require("cors");

const app = express();

app.use(cors());

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads')
    },
    filename: function(req, file, cb) {
        let fileExtension = file.originalname.split('.')[1]
        cb(null, file.fieldname + '-' + Date.now() + '.' + fileExtension);
    }
});
const upload = multer({ storage: storage });


app.post("/api/file/upload", upload.array('files', 5), (req, res) => {

    const files = req.files;
    console.log("files:::", files);
    if (files && files.length) {
        res.status(200).send(files);
    } else {
        res.status(400).send("Please choose file!!");
    }
});


app.get("/", (req, res) => {
    res.status(200).send("Server is up!!!");
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000 ...");
});