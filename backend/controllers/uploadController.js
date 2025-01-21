const StuModel = require("../models/studentModel");

const uploadFile = async (req, res) => {
    try {
        const { rollno, name, city } = req.body;
        const imgname = req.file.filename;

        await StuModel.create({
            rollno,
            name,
            city,
            imgname
        });

        res.send("File uploaded successfully!");
    } catch (error) {
        console.error("Error uploading file:", error);
        res.status(500).send("Internal Server Error");
    }
};

const dataDisplay = async (req, res) => {
    try {
        const data = await StuModel.find();
        res.send(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = {
    uploadFile,
    dataDisplay
};
