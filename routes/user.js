// Instances a router
const { Router } = require('express');
const { check } = require('express-validator');
const { userGet, 
        userPut, 
        userPost, 
        userDelete, 
        userPatch } = require('../controllers/users');

const router = Router();

router.get('/',   userGet);
router.put('/:id',   userPut);
// When we define a middleware we sent an array before the controller
router.post('/',[
        check('email', 'The email does not valid').isEmail(),
],  userPost);
router.delete('/', userDelete);
router.patch('/', userPatch);

module.exports = router;