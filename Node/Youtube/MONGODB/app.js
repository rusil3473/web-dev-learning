/* const express = require('express');
const app = express();
const mongoose = require('mongoose');
const express = require('express');
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
mongoose.connect("mongodb+srv://rusilvaru555:C7TYQhuVFL5nYpfg@node.x9pj8.mongodb.net/?retryWrites=true&w=majority&appName=NODE")
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    const db = mongoose.connection;
    db.collection('inventory').insertOne({
      name: 'Laptop',
      price: 1000,
      description: 'A laptop',
      category: 'Electronics',
      stock: 100
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas:", err);
  });

 */
  const express = require('express');
  const app = express();
  const mongoose = require('mongoose');
  app.use(express.json());

  mongoose.connect("mongodb+srv://rusilvaru555:C7TYQhuVFL5nYpfg@node.x9pj8.mongodb.net/?retryWrites=true&w=majority&appName=NODE")
    .then(() => {
      console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB Atlas:", err);
    });

  const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    stock: Number
  });

  const Product = mongoose.model('Product', productSchema);

  app.post('/products', async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  app.get('/products', async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).send(products);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });