var express = require('express');
var router = express.Router();
var ProfessorService = require('../../services/professor/ProfessorService');

router.get('/list', function (req, res, next) {
  return res.json(ProfessorService.list());
});

router.post('/create', (req, res, next) => {
  const professor = ProfessorService.register(req.body);
  return res.json(professor);
});

router.put('/update/:id', (req, res, next) => {
  const professor = ProfessorService.update(req.params.id, req.body);
  return res.json(professor);
});

router.delete('/delete/:id', (req, res, next) => {
  const ok = ProfessorService.delete(req.params.id);
  if (ok) return res.json({ sucess: true });
  else return res.json({ sucess: false });
});

router.get('/retrieve/:id', (req, res, next) => {
  const professor = ProfessorService.retrieve(req.params.id);
  return res.json(professor);
});

module.exports = router;
