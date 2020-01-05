const Room = require("./../models/roomModel");

exports.creatRoom = async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        room: newRoom
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    });
  }
};

exports.getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json({
      status: "success",
      data: {
        rooms
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.parmas.id);
    res.status(200).json({
      status: "success",
      data: {
        room
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(req.parmas.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: "success",
      data: room
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};

exports.deleteRoom = async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.parmas.id);
    res.status(204).json({
      status: "success",
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
};
