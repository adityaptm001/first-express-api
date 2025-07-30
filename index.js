require('dotenv').config();
const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const User = require("./models/User");
const cors = require("cors");
const authRoutes = require('./routes/Authroutes');
const testRoutes = require('./routes/Testroutes');
const adminRoutes = require('./routes/adminRoutes');


app.use(cors());

app.use(express.json());
mongoose.connect("mongodb+srv://jhanna12222:9sWyhnQC3DPVCiHc@cluster0.hnyoqm2.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });


app.get("/", (req, res) => {
    res.send("Hello Worked!")
})

app.use('/api/auth', authRoutes);
app.use('/api/test', testRoutes);
app.use('/api/admin', adminRoutes);


app.listen(port, () => console.log("Port started! at", port))