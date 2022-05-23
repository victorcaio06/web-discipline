let express = require('express');
const ProfessorService = require('../../services/professor/ProfessorService');
let router = express.Router();
let ProfessorServiceMongo = require('../../services/professor/ProfessorServiceMongoDb');

router.get('/list', (req, res, next) => {
  ProfessorServiceMongo.list(req, res);
});

router.post('/create', (req, res, next) => {
  ProfessorServiceMongo.register(req, res);
});

router.put('/updateq:id', (req, res, next) => {
  ProfessorServiceMongo.update(req, res);
});

router.delete('/delete/:id', (req, res, next) => {
  ProfessorServiceMongo.delete(req, res);
});

module.exports = router;