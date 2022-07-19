const categoryRouter = require('./category-router');


const router = require('express').Router();

router.use('/category', categoryRouter)
router.use('/task', (req, res) => res.sendStatus(501))
router.use('/user', (req, res) => res.sendStatus(501))
router.use('/auth', (req, res) => res.sendStatus(501))




module.exports = router;
