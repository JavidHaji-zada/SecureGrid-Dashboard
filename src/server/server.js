const express = require("express");
const mogoose = require("mongoose");
const morgan = require("morgan");
const bodParser = require("body-parser");
const bodyParser = require("body-parser");
const UserRoute = require('./routes/UserRoute')

mogoose.connect("mongodb://localhost:27017/securegrid", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mogoose.connection;

db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("Database Connection Established!");
});

const app = express();

app.use(morgan("dev"));
app.use(bodParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/employee', UserRoute)