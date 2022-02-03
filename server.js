const express = require("express");
const indexRouter = require("./routers/indexRouter");
const userRouter = require("./routers/userRouter");

const app = express();
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/users", userRouter);

app.listen(5001, () => console.log("apps berjalan di port 5001"))