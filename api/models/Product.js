const mongoose = require("mongoose");

/**
 * Product model:
 * - Title: String, required, unique
 * - Description: String, required
 * - Image: String, required
 * - Category: Array
 * - Version: Array, required
 * - Method: Array, required
 * - Price: Number, required
 */
const ProductSchema = new mongoose.Schema(
    {
        title:{type:String, required:true, unique:true},
        desc:{type:String, required:true},
        img:{type:String, required:true},
        cat:{type:Array},
        version:{type: Array},
        method:{type: Array},
        price:{type: Number, required: true},
        inStock:{type: Boolean, default: true}
    },
    {timestamps:true}
);

module.exports = mongoose.model("Product", ProductSchema)