import mongoose from "mongoose";
import app from "./app.ts";
import config from "./config/index.ts";

bootStrap().catch((err) => console.log(err));
const port = 3000;

async function bootStrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("Connected to MongoDB successfully");
    app.listen(port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

bootStrap();
