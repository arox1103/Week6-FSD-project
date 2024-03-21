const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const foodController = require('./foodController');

const app = express();

mongoose.connect('mongodb://localhost:27017/food-nutrition-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.use(bodyParser.json());

app.post('/api/foods', foodController.createFoodItem);
app.get('/api/foods', foodController.getAllFoodItems);
app.get('/api/foods/:id', foodController.getFoodItemById);
app.put('/api/foods/:id', foodController.updateFoodItem);
app.delete('/api/foods/:id', foodController.deleteFoodItem);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
