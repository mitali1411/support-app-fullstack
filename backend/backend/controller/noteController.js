const asyncHandler = require('express-async-handler');
const User = require('../model/userModel')
const Ticket = require('../model/ticketModel');
const Note = require('../model/noteModel')

// GET NOTES
const getNotes = asyncHandler(async(req, res) => {
    
    // Find if user exist in db using JWT
    const user = await User.findById(req.user.id);

    if(!user){
        res.status(400);
        throw new Error('Invalid Request');
    };


    // Find if Ticket Exist
    const ticket = await Ticket.findById(req.params.ticketId);

    if(!ticket){
        res.status(400);
        throw new Error('Invalid Request');
    };


    const notes = await Note.find({ticket : req.params.ticketId})

    if(!notes){
        res.status(404);
        throw new Error('Notes not Found!');
    }
    
    // res.send('All Notes!!');
    res.status(200).json(notes);
    
});



// ADD NOTES
const addNote = asyncHandler(async(req, res) => {

    // Comment
    const {comment} = req.body;

    if(!comment){
        res.status(401);
        throw new Error('Please add a comment!');
    }
    
    // Find if user exist in db using JWT
    const user = await User.findById(req.user.id);

    if(!user){
        res.status(400);
        throw new Error('Invalid Request');
    };


    // Find if Ticket Exist
    const ticket = await Ticket.findById(req.params.ticketId);

    if(!ticket){
        res.status(400);
        throw new Error('Invalid Request');
    };


    const note = await Note.create({
        user : req.user.id,
        ticket : req.params.ticketId,
        comment : comment
    })
    
    // res.send('All Notes!!');
    res.status(200).json(note);
    
});
module.exports = {getNotes, addNote}