let express = require('express');
let router = express.Router();
let ProfessorServiceMongo = require('../../services/professor/ProfessorServiceMongoDb');

router.get('/list', (req, res, next) => {
  ProfessorServiceMongo.list(req, res);
});

router.post('/create', (req, res, next) => {
  ProfessorServiceMongo.register(req, res);
});

router.put('/update/:id', (req, res, next) => {
  ProfessorServiceMongo.update(req, res);
});

router.get('/retrieve/:id', (req, res, next) => {
  ProfessorServiceMongo.retrieve(req, res);
});

router.delete('/delete/:id', (req, res, next) => {
  ProfessorServiceMongo.delete(req, res);
});

module.exports = router;
