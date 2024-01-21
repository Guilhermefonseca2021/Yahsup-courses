const mongoose = require("mongoose");
import connect from "../config/connect";

export default async function connectDataBase() {
  await mongoose.connect(`${connect.database}`);
}
