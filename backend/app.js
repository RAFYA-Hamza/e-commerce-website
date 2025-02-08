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
  const products = await fs.readFile("./data/available-products.json", "utf8");

  res.json(JSON.parse(products));
});

app.get("/products/:category/:id", async (req, res) => {
  const productId = parseInt(req.params.id);
  const category = req.params.category;

  const products = await fs.readFile("./data/available-products.json", "utf8");

  const product = JSON.parse(products).find(
    (product) => product.id === productId && product.category === category
  );

  res.json(product);
});

app.get("/", async (req, res) => {
  const products = await fs.readFile("./data/available-products.json", "utf8");

  setTimeout(() => {
    const productsObj = JSON.parse(products);

    const newProducts = productsObj.filter(
      (product) => product.status !== "old"
    );

    res.json(newProducts);
  }, 2000);
});

app.listen(8080);

console.log("start listening...");
