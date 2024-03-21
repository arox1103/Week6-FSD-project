const Food = require('./foodModel');

exports.createFoodItem = async (req, res) => {
    try {
      const food = await Food.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          food
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message
      });
    }
};

exports.getAllFoodItems = async (req, res) => {
    try {
      const foods = await Food.find();
      res.status(200).json({
        status: 'success',
        results: foods.length,
        data: {
          foods
        }
      });
    } catch (err) {
      res.status(500).json({
        status: 'fail',
        message: err.message
      });
    }
};

exports.getFoodItemById = async (req, res) => {
    try {
      const food = await Food.findById(req.params.id);
      res.status(200).json({
        status: 'success',
        data: {
          food
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: 'Food item not found'
      });
    }
};

exports.updateFoodItem = async (req, res) => {
    try {
      const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      res.status(200).json({
        status: 'success',
        data: {
          food
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message
      });
    }
};

exports.deleteFoodItem = async (req, res) => {
    try {
      await Food.findByIdAndDelete(req.params.id);
      res.status(204).json({
        status: 'success',
        data: null
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: 'Food item not found'
      });
    }
};