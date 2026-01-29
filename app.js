const express = require('express');
const bodyParser = require('body-parser');

const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/category', categoryRoutes);
app.use('/product', productRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
