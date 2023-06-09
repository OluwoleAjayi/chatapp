import express from 'express';
import chatRoom from '../controllers/chatRoom.js'

const router = express.Router();

router.get('/', chatRoom.getRecentConversation)
router.get('/:roomId', chatRoom.getConversationByRoomId)
router.post('/initiate', chatRoom.initiate)
router.post('/:roomId/message', chatRoom.postMessage)
router.put('/:roomId/mark-read', chatRoom.markConversationReadByRoomId)

export default router