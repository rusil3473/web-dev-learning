/*  app.get("/",(req,res)=>{
  res.status(200).send("<h1>Home Page</h1>")
})

app.get("/about",(req,res)=>{
  res.status(200).send("<h1>About Page</h1>")
})

app.all("*",(req,res)=>{
  res.status(404).send("<h1>Not Found</h1>")
}) 
 app.get("/",(req,res)=>{
  res.sendFile(path.resolve("/home/rusil/CODE/Web Dev/1_Learning_Phase/Node/Jhon_staters/node-express-course/02-express-tutorial/navbar-app/index.html"))
  
}) 
const express = require('express');
const app=express()
const mongoose = require('mongoose');
const path = require('path');
const fs=require('fs')
const {product} = require('./models/product.model.js');

app.get("/",(req,res)=>{
  res.send("Hello Node!")
}) 
app.post("/",async (req,res)=>{
  try{
    const p= await product.create()
    res.status(200).json(p)
  }
  catch(err){
    res.status(500).json({Message:"jsdn"})
  }
})
app.get("/",async (req,res)=>{
  try{
    const p= await product.find()
    res.status(200).json(p)
  }
  catch(err){
    res.status(500).json({Message:"jsdn"})
  }
})

app.listen(5000,()=>{
  console.log("Listing to server")
})
mongoose.connect("mongodb+srv://rusilvaru555:C7TYQhuVFL5nYpfg@node.x9pj8.mongodb.net/?retryWrites=true&w=majority&appName=NODE")
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas:", err);
  });
 */

/*----------------------------------------------------------------------------------------------------------------------*/
const express = require('express');
const mongoose = require('mongoose');
const app = express();
/* const Product = require('./model/productModel.js'); */
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);


app.use(express.json());

app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});


mongoose.connect("mongodb+srv://rusilvaru555:C7TYQhuVFL5nYpfg@node.x9pj8.mongodb.net/?retryWrites=true&w=majority&appName=NODE")
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB Atlas:", err);
  });