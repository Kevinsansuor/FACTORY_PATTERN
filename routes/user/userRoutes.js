const express = require('express');
const { addNewUser, searchUser } = require('../../controllers/users/userControllers');
const { userValidation } = require('../../middlewares/validators/userValidations');
const router = express.Router();

router.post('/create-user', userValidation ,addNewUser);
router.get('/search-user/:Email', searchUser );

module.exports = router;