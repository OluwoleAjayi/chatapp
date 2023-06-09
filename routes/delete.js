import express from 'express';
import deleteController from '../controllers/delete.js'

const router = express.Router();

router.delete('/room/:roomId', deleteController.deleteRoomById)
router.delete('/message/:messageId', deleteController.deleteMessageById)

export default router;
