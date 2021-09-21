// Instances a router
const { Router } = require('express');
const { userGet } = require('../controllers/users');

const router = Router();

router.get('/', userGet);
router.put('/', (req, res)=>{
    //res.send('Hello World');
    res.status(500).json({
    //res.status(403).json({
        ok: true,
        msg: 'put API',
        data: [0, 1.2, 3.589]
    });
});
router.post('/', (req, res)=>{
    //res.send('Hello World');
    res.status(201).json({
    //res.status(403).json({
        ok: true,
        msg: 'post API',
        data: [0, 1.2, 3.589]
    });
});
router.delete('/', (req, res)=>{
    //res.send('Hello World');
    res.json({
    //res.status(403).json({
        ok: true,
        msg: 'delete API',
        data: [0, 1.2, 3.589]
    });
});

module.exports = router;