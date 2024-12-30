const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./userRouter")
const app = express();

app.use(express.json())

process.on("uncaughtException", (err) => {
  console.log("uncaughtException Shutting Down ! ");
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

app.use("/api/v1/auth",userRouter)



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT no ${PORT}`);
});


process.on("unhandledRejection", (err) => {
  // console.log(err);
  console.log("unhandledRejection! Shutting Down...");
  server.close(() => {
    process.exit(1);
  });
});
