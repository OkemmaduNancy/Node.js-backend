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
    imageUrl: String,
    description: String,
    categories: {
      type: String,
      enum: ["accesories", "building", "outfits",]
    }
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
