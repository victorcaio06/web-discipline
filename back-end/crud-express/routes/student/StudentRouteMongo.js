let express = require('express');
let router = express.Router();
let UserService = require('../../services/student/StudentServiceMongo');

router.get('/list', (req, res, next) => {
  UserService.list(req, res);
});

router.post('/register', (req, res, next) => {
  UserService.register(req, res);
});

router.put('/update/:id', (req, res, next) => {
  UserService.update(req, res);
});

router.get('/retrieve/:id', (req, res, next) => {
  UserService.retrieve(req, res);
});

router.delete('/delete/:id', (req, res, next) => {
  UserService.delete(req, res);
});

module.exports = router;
