const express = require('express')
const {protect} = require('./authMiddleware')
const {getTickets, addTicket, updateTicket, getTicket} = require('../controller/ticketController')

const router = express.Router();

router.get('/', protect, getTickets);
router.post('/', protect, addTicket);
router.put('/:id', protect, updateTicket);
router.get('/:id', protect, getTicket);


// Router for Note using mergeParams in noteRouter
router.use('/:ticketId/note', require('./noteRoutes'))

module.exports = router;