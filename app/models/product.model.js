const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    name: String,
    quantity: {
      require: true,
      type: Number,
    },
    price: Number,
    color: String,
    cart: String,
    imageUrl: String,
    description: String,
    categories: {
      type: String,
      enum: ["Accessories", "Building", "Outfits", "Please note that this item might be available based on the delivery area"]
    }
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Product", ProductSchema);
