const UserModel = require('../../models/student/StudentModelMongoDb');

class UserService {
  static register(req, res) {
    UserModel.create(req.body).then((student) => {
      res.status(200).json(student);
    });
  }

  static list(req, res) {
    UserModel.find().then((students) => {
      res.status(200).json(students);
    });
  }

  static update(req, res) {
    UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (student) => {
        res.status(200).json(student);
      }
    );
  }

  static delete(req, res) {
    UserModel.findByIdAndRemove(req.params.id).then((student) => {
      res.status(200).json(student);
    });
  }

  static retrieve(req, res) {
    UserModel.findById(req.params.id).then((student) => {
      res.status(200).json(student);
    });
  }
}

module.exports = UserService;
