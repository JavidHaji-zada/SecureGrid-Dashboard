const User = require("../models/User");
const { response } = require("express");

// Show the list of Users
const index = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
};

const show = (req, res, next) => {
  let uid = req.body.uid;
  User.findById(uid)
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "Error occured",
      });
    });
};

// create new user
const createUser = (req, res, next) => {
  const { name, email, password, profile_pic } = req.body;
  let user = new User({
    name,
    email,
    password,
    profile_pic,
    uid: Math.random() * 10000,
  });
  user
    .save()
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        error,
      });
    });
};

const updateUser = (req, res, next) => {
  const { name, email, password, uid, profile_pic } = req.body;
  let updatedUser = {
    name,
    email,
    password,
    uid,
    profile_pic,
  };
  User.findByIdAndUpdate(uid, { $set: updatedUser })
    .then((response) => {
      res.json({
        message: "Update Compeleted",
      });
    })
    .catch((error) => {
      res.json({
        message: "Update Failed",
      });
    });
};

const deleteUser = (req, res, next) => {
  let uid = req.body.uid;
  User.findByIdAndRemove(uid)
    .then((response) => {
      res.json({
        message: "Deletion Compeleted!",
      });
    })
    .catch((err) => {
      res.json({
        message: "Deletion Failed!",
      });
    });
};

module.exports = {
  index,
  show,
  createUser,
  updateUser,
  deleteUser,
};
