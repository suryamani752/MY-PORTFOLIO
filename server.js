const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

//dotenv configure
dotenv.config();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//access static files
app.use(express.static(path.join(__dirname, "./client/build")));

//routes
// app.get("/", (req, res) => {
//   res.send("<h1>welcome to node server</h1>");
// });
app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = process.env.PORT || 7520;

//listen
app.listen(PORT, () => {
  console.log(`server Runnning on PORT ${PORT}`);
});
