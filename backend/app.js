require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const marketRoutes = require("./routes/market");

const app = express();

// middlewares
app.use(express.json());
app.use(cors({credentials: true , origin: true}));

// app routes
app.use("/api", authRoutes);
app.use("/api", marketRoutes);

const port = process.env.PORT || 5500;

// db connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.error("Error Connecting DB", err);
  });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log("App is listening on http://localhost:" + port);
});
