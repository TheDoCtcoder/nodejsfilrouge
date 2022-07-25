const categoryRouter = require('./category-router');
const userRouter = require('./user-router');
const taskRouter = require('./task-router');
const authRouter = require('./auth-router');

const router = require('express').Router();

router.use('/category', categoryRouter);
router.use('/task', taskRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);




module.exports = router;
