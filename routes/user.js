import express from 'express';
import user from '../controllers/user.js';

const router = express.Router();

router.get('/', user.onGetAllUsers);
router.post('/', user.OnCreateUser);
router.get('/:id', user.onGetUserById);
router.delete('/id', user.onDeleteUserById)

export default router