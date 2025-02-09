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

app.get("/products/:category", async (req, res) => {
  const category = req.params.category;
  const products = await fs.readFile("./data/products.json", "utf8");

  const resProducts = JSON.parse(products).filter(
    (product) => product.category === category
  );

  res.json(resProducts);
});

app.get("/products/:category/:id", async (req, res) => {
  const productId = parseInt(req.params.id);
  const category = req.params.category;

  const productsDetails = await fs.readFile(
    "./data/products-details.json",
    "utf8"
  );

  const products = await fs.readFile("./data/products.json", "utf8");

  const productDetails = JSON.parse(productsDetails).find(
    (product) => product.id === productId
  );

  const product = JSON.parse(products).find(
    (product) => product.id === productId
  );

  const resProduct = { id: productId, ...product, ...productDetails };

  res.json(resProduct);
});

app.get("/", async (req, res) => {
  const products = await fs.readFile("./data/products.json", "utf8");

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
