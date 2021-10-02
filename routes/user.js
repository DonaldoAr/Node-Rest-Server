// Instances a router
const { Router } = require('express');
const { check } = require('express-validator');
const { userGet, 
        userPut, 
        userPost, 
        userDelete, 
        userPatch } = require('../controllers/users');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.get('/',   userGet);
router.put('/:id',   userPut);
// When we define a middleware we sent an array before the controller
router.post('/',[
        check('name', 'The name should be exist').not().isEmpty(),
        check('password','The password should be exist and mush have more than 6 letters').isLength({ min:6 }),
        check('email', 'The email does not valid').isEmail(),
        check('role', 'Th rol is not valid').isIn(['ADMIN_ROLE','USER_ROLE']),
        validateFields
],  userPost);
router.delete('/', userDelete);
router.patch('/', userPatch);

module.exports = router;