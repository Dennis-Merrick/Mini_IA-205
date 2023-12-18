const express = require('express');
const mongoose = require('mongoose');
const product = require('./models/product')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World! Welcome to the World of Merrick')
})
app.get('/about', (req, res) => {
    res.send('About Us')
})

app.post('/products', async(req, res) => {
  try {
    const product = await product.create(req.body)
    res.status(200).json(product)

  } catch (err) {
    res.status(400).json({
      message: err.message
    })


 } })

mongoose.set("strictQuery", false)

mongoose.connect('mongodb+srv://MerrickAdmin:Hancock115544@merrick.gmccmmx.mongodb.net/node-api')
.then( () => {
    console.log('Connected to MongoDB')
    app.listen(3000, ()=>{

        console.log('Server is running on port 3000')
    } );

  
} )
.catch( err => {
    console.log(err)
} )