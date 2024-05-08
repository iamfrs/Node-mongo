const express = require('express');
const app = express();
const mongoose = require('mongoose');

const authRoutes = require('./app/routers/loginRouter');
require('dotenv').config();

mongoose
  .connect("mongodb://localhost:27017/Node-mongo")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
const fileUpload = require("express-fileupload");
app.use(fileUpload());

app.use('/api', authRoutes);
app.get("/", (_req, res) => {
  res.send("its a hy from Node-mongo");
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});