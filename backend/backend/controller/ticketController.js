
const asyncHandler = require('express-async-handler');
const Ticket = require('../model/ticketModel');
const User = require('../model/userModel');


// GET TICKET
const getTickets = asyncHandler(async(req, res) => {


    // Find if user exist in db usng JWT
    const user = await User.findById(req.user._id)

    if(user){
        const tickets = await Ticket.find({user : user._id});
        res.status(200);
        res.json(tickets);
    }else{
        res.status(400);
        throw new Error('Cannot Find Tickets')
    }
});


// GET SINGLE TICKET
const getTicket = asyncHandler(async(req, res) => {

    // Find if user exist in db usng JWT
    const user = await User.findById(req.user._id)

    if(user){
        const ticket = await Ticket.findById(req.params.id);
        res.status(200);
        res.json(ticket);
    }else{
        res.status(400);
        throw new Error('Cannot Find Ticket')
    }
});


// ADD OR CREATE TICKET
const addTicket = asyncHandler(async(req, res) => {

    const {product, description} = req.body

    if(!product || !description){
        res.status(401);
        throw new Error('Please Fill All Details!')
    }

    // Find if user exist in db usng JWT
    const user = await User.findById(req.user._id);

    if(!user){
        res.status(400);
        throw new Error('Invalid Request');
    }


    // if user exist, we create a Ticket
    const ticket = await Ticket.create({
        user : req.user._id,
        product : product,
        description : description,
        status : 'new'
    })

    // res.json({msg : 'Working'});

    if(ticket){
        res.status(201);
        res.json(ticket);
    }else{
        res.status(401);
        throw new Error('Ticket cannot be created!');
    }
});


// UPDATE TICKET
const updateTicket = asyncHandler(async(req, res) => {
    console.log(req.user);


    // Find if user exist in db using JWT
    const user = await User.findById(req.user._id);
    if(!user){
        res.status(400);
        throw new Error('Invalid Request')
    }

    const updatedTicket = await Ticket.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );


    if(!updatedTicket){
        res.status(400);
        throw new Error('Ticket Cannot Be Craeted!');
    }
    res.status(201).json(updatedTicket);
});

module.exports = {getTickets, addTicket, getTicket, updateTicket}