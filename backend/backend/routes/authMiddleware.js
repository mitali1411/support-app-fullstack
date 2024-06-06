const asyncHandler = require("express-async-handler");
const User = require('../model/userModel')
const jwt = require('jsonwebtoken')

const protect = asyncHandler(async(req, res, next) => {
    // console.log(req.headers.authorization);

    let token;

    // check if request have authorization with Bearer Token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){


        // Split Bearer Token
        try {
            
            token = req.headers.authorization.split(" ")[1];
            // console.log(token)


            // Verify Token
            const decode = await jwt.verify(token, process.env.JWT_SECRET)
            // console.log(decode)


            // Add User into Req Obj
            req.user = await User.findById(decode.id).select('-password')
            // console.log(req.user)


            // Moves to next function
            next();


        } catch (error) {
            res.status(400)
            throw new Error('Invaild Token')
        }
    } else{
        res.status(400)
        throw new Error('Unauthorized Access')
    }
});

module.exports = {protect}