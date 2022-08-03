const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");

// require("dotenv").config();

// app
const app = express();

app.use(bodyParser.json());
// app.use(cors());

// app.use(cors({ origin: process.env.CLIENT_URL }));

// middleware

// app.use("/api", authRoutes);


app.get("/api", (req, res) => {
  console.log(req.body);
  res.json({
    data: "You hit the server endpoint",
  });
});

app.post("/on_search", async (req, res) => {
  var data = await req.body;
  console.log(data);
  console.log(data["message"]);
  res.json({
    data: "You hit the server endpoint",
    response: data["message"],
  });
});

// listen
const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`Server up at http://localhost:${PORT} `);
});
