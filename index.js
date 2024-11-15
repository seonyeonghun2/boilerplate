import express from "express";
const app = express();
const port = 5000;
import mongoose from "mongoose";

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://demouser:demo1234@cluster0.t0bqn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}

app.get("/", (req, res) => res.send("Hello world, 안녕하세요"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
