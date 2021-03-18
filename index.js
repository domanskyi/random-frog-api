require("dotenv").config();

const axios = require("axios");

const express = require("express");
const cors = require("cors");
const app = express();

UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

app.use(cors());

app.get("/", (req, res) => {
  if (!UNSPLASH_ACCESS_KEY) {
    return res.send(
      "https://cdn.shopify.com/s/files/1/0452/4205/files/WPMY6fO.png?v=1487876599"
    );
  }

  axios
    .get("https://api.unsplash.com/photos/random", {
      params: {
        collections: "21973979",
        client_id: UNSPLASH_ACCESS_KEY,
      },
    })
    .then(({ data }) => {
      res.send(data.urls.full);
    })
    .catch((err) => {
      res.status(500).send("Some error occured");
    });
});

app.listen(8080, () => {
  console.log("Runnning frogs API 🐸");
});
