const mongoose = require('mongoose');

const TagsSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

export default mongoose.model('Tags', TagsSchema);