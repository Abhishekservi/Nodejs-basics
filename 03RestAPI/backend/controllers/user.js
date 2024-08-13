const User = require('../models/user');

async function handleGetAllUsers(req, res) {
    const allDbusers = await User.find();
    res.json(allDbusers);
}

async function handleGetUserById(req, res) {
    const user = await User.findById(req.params.id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ status: "error", message: "User not found" });
      }
}

async function handleUpdateUserbyId(req, res) {
    const user  = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
      if (user) {
        user.firstName = req.body.first_name;
        user.lastName = req.body.last_name;
        user.email = req.body.email;
    }
    await user.save();
    res.json({ status: "success", message: "User updated successfully"
    })
}


async function handleDeleteUserById(req, res) {
    const user = await User.findByIdAndDelete(req.params.id);
      if(user) {
        res.json({ status: "success", message: "User deleted successfully" });
      } else {
        res.status(404).json({ status: "error", message: "User not found" });
      }
}

async function handlecreateNewUser(req, res) {
    const body = req.body;
  if (!body.first_name || !body.last_name || !body.email) {
    return res
      .status(400)
      .json({ status: "error", message: "Please enter all fields" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    ipAddress: body.ip_address,
    gender: body.gender,
  })

  console.log(result)

  return res.status(201).json({ status: "success", id: result._id });

}

module.exports = { 
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserbyId,
    handleDeleteUserById,
    handlecreateNewUser
 };