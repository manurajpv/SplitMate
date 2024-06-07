var dotenv = require("dotenv");
var express = require("express");
var cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

var usersRouter = require("./routes/userRouter");

app.use("/api/users", usersRouter);

//To detect and log invalid api hits
app.all("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Invalid path",
  });
});

const port = process.env.PORT || 3001;
app.listen(port, (err) => {
  console.log(`Server started in PORT | ${port}`);
});
