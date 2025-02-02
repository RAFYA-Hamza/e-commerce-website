import fs from "node:fs/promises";

import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/products", async (req, res) => {
  setTimeout(async () => {
    const products = await fs.readFile(
      "./data/available-products.json",
      "utf8"
    );

    res.json(JSON.parse(products));
    console.log("executed");
  }, 3000);
});

app.listen(8080);

console.log("start listening...");
