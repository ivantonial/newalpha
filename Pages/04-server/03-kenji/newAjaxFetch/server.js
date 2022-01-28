const express = require('express');
const port = 8080;
const ip = "localhost:";
const app = express();

let products = [
  { "id": 1, "item": "Camisa do Flamengo" },
  { "id": 2, "item": "Camisa do Grêmio" },
  { "id": 3, "item": "Camisa do Nottingham Forest" }
]

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/produto/all", (req, res) => {
  res.json(products);
});

app.get("/produto/:id", (req, res) => {
  const product = [];
  
  products.forEach((element) => {
    if (element.id === Number(req.params.id)) {
      product.push(element)
    }
  });

  res.json(product);
});

app.delete("/produto/:id", (req, res) => {
  const product = products.filter((element) => {
    if (element.id === Number(req.params.id)) {
      const removed = products.indexOf(element);
      if (removed !== -1) {
        products.splice(removed, 1);
      }
      return true;
    }
    else return false;
  });

  res.send("opa")
});

app.put("/produto/:id", (req, res) => {
  const newItem = req.body.item;
  let test = false;
  products.filter((element) => {
    if (element.id === Number(req.params.id)) {
      const changed = products.indexOf(element);
      if (changed !== -1) {
        test = true;
        element.item = newItem; 
      }
    }
  })
  res.send(test);
});

app.post("/produto/", (req,res) => {
  const register = req.body;
  let newId = products[products.length-1].id + 1;

  const newProduct = {"id": newId, "item": register.item};
  products.push(newProduct);

  res.send("funfou");
});


app.use(express.static('page'));

app.listen(port, () => console.log(`Working on http://${ip}${port}`));
