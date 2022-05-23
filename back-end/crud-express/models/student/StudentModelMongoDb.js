let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
  name: { type: String, required: true, max: 100 },
  course: { type: String, required: true, max: 100 },
  ira: { type: Number, required: true, },
});

let UserModel = mongoose.model('students', UserSchema);

module.exports = UserModel;
