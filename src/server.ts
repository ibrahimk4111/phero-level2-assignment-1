import app from "./app";
import { config } from "./config";
import mongoose from "mongoose";

async function main() {
  await mongoose.connect(config.db_url as string);
  console.log("mongoose connected");
}
main();

app.listen(config.port, () => {
  console.log(`[server]: Server is running at http://localhost:${config.port}`);
});
