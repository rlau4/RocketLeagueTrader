var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var TradeSchema = new Schema({
  // `title` is required and of type String
  Have: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  Want: {
    type: String,
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
var Trade = mongoose.model("Trade", TradeSchema);

// Export the Article model
module.exports = Trade;
