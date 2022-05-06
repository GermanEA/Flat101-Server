// Seed here!
import mongoose from 'mongoose';
import Product from './src/api/product.model.js';

const dbtitle = 'flat101'
mongoose.connect('mongodb://127.0.0.1:27017/flat101', { useUnifiedTopology: true, useNewUrlParser: true })

const products = [
  {
    "name": "Lechuga iceberg",
    "description": "Producto de Mariano, cultivada con amor.",
    "favorite": true,
    "price": 0.79,
    "SKU": "HB000000001",
    "image": ""
  },
  {
    "name": "Cebolla Roja",
    "description": "Producto de Mariano, cultivada con amor.",
    "favorite": true,
    "price": 1.79,
    "SKU": "HB000000002",
    "image": ""
  },
  {
    "name": "Zanahoria",
    "description": "Producto de Angel, cultivada con amor.",
    "favorite": true,
    "price": 2.79,
    "SKU": "HB000000003",
    "image": ""
  },
  {
    "name": "Patata Agria",
    "description": "Producto de Mariano, cultivada con amor.",
    "favorite": true,
    "price": 0.39,
    "SKU": "HB000000004",
    "image": ""
  },
  {
    "name": "Tomate Maduro",
    "description": "Producto de Mariano, cultivada con amor.",
    "favorite": true,
    "price": 0.89,
    "SKU": "HB000000005",
    "image": ""
  },
  {
    "name": "Tomate Verde",
    "description": "Producto de Mariano, cultivada con amor.",
    "favorite": true,
    "price": 0.89,
    "SKU": "HB000000006",
    "image": ""
  },
  {
    "name": "Tomate Cherry",
    "description": "Producto de Felix, cultivada con amor.",
    "favorite": true,
    "price": 0.89,
    "SKU": "HB000000007",
    "image": ""
  },
  {
    "name": "Pepino",
    "description": "Producto de Felix, cultivada con amor.",
    "favorite": true,
    "price": 2.89,
    "SKU": "HB000000008",
    "image": ""
  },
  {
    "name": "Pimiento Verde",
    "description": "Producto de Felix, cultivada con amor.",
    "favorite": true,
    "price": 0.89,
    "SKU": "HB000000009",
    "image": ""
  },
  {
    "name": "Pimiento Rojo",
    "description": "Producto de Felix, cultivada con amor.",
    "favorite": true,
    "price": 0.89,
    "SKU": "HB000000010",
    "image": ""
  },
  {
    "name": "Pimiento Amarillo",
    "description": "Producto de Felix, cultivada con amor.",
    "favorite": true,
    "price": 0.89,
    "SKU": "HB000000011",
    "image": ""
  },
  {
    "name": "Tomate Rosa",
    "description": "Producto de Angel, cultivada con amor.",
    "favorite": true,
    "price": 1.59,
    "SKU": "HB000000012",
    "image": ""
  },
  {
    "name": "Tomate Azul",
    "description": "Producto de Angel, cultivada con amor.",
    "favorite": true,
    "price": 0.89,
    "SKU": "HB000000013",
    "image": ""
  }
]


Product
    .create(products)
    .then(allProductsCreated => {
        console.log(`Created ${allProductsCreated.length} products`)
        mongoose.connection.close();
    })
    .catch(err => console.log('It was a mistake,', err))