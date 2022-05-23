let mongoose = require('mongoose');

let ProfessorSchema = mongoose.Schema({
  name: { type: String, required: true, max: 100 },
  university: { type: String, required: true, max: 100 },
  degree: { type: String, required: true, max: 100 },
})

let ProfessorModel = mongoose.model('professors', ProfessorSchema);

module.exports = ProfessorModel;