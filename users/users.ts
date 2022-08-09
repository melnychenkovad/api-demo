import express from 'express';

const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
    console.log('Users router handler');
    next();
});

usersRouter.post('/login', (req, res) => {
    res.send('login');
});

usersRouter.post('/register', (req, res) => {
    res.send('register');
});

export default usersRouter;