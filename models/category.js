// const mongoose = require('mongoose');

// const categorySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Please provide a name for the category'],
//     unique: true
//   },
//   description: {
//     type: String
//   },
//   slug: {
//     type: String,
//     required: [true, 'Please provide a slug for the category'],
//     unique: true
//   },
//   seoTitle: {
//     type: String
//   },
//   metaDescription: {
//     type: String
//   },
//   state: {
//     type: String,
//     enum: ['active', 'hide', 'date'],
//     default: 'active'
//   },
//   date: {
//     type: Date
//   },
//   parent: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Category'
//   }
// });

// const Category = mongoose.model('Category', categorySchema);

// module.exports = Category;