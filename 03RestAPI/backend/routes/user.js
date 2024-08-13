const express  = require("express");
const { handleGetAllUsers, handleGetUserById, handleUpdateUserbyId, handleDeleteUserById, handlecreateNewUser } = require("../controllers/user");
const router = express.Router();

//Rest Api get all users
router
  .route("/")
  .get(handleGetAllUsers)
  .post(handlecreateNewUser);

//Rest Api get user by id

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserbyId)
  .delete(handleDeleteUserById);
  
module.exports = router;