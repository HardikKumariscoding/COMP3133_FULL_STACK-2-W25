const express = require("express");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

const PORT = 8081;

const app = express();


app.use(express.json());

connectDB();


app.use("/", userRoutes); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
