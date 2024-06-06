const User = require('../model/userModel')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerUser = asyncHandler(async(req, res) => {
    // res.send('User Registered')

    const {name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400);
        throw new Error('Please Fill All Details')
    }


    // Find if User already Exist
    const userExist = await User.findOne({email : email});

    if(userExist){
        res.status(401)
        throw new Error('User Already Exist')
    }


    // Hash Passowrd
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)


    const user = await User.create({
        name,
        email,
        password : hashedPassword
    })


    if(!user){
        res.status(401);
        throw new Error('Cannot Create User')
    }

    res.status(201).json({
        id : user._id,
        name : user.name,
        email : user.email,
        token : generateToken(user._id)
    });

});

const loginUser = asyncHandler(async(req, res) => {
    // res.send('User Login')
    const {email, password} = req.body

    if(!email || !password){
        res.status(400);
        throw new Error('Please Fill All Details');
    }


    // Find if user exist
    const user = await User.findOne({email : email});

    // Compare Password
    if(user && bcrypt.compareSync(password, user.password)){
        res.status(200).json({
            id : user._id,
            name : user.name,
            email : user.email,
            token : generateToken(user._id)
        })
    }else{
        res.status(400);
            throw new Error('Invalid Credentials')
        }

});


// Secret Controller
const secretController = (req, res) => {
    res.send('I am Protected Route')
}


// Generate Token
const generateToken = (id) => {
    return jwt.sign({id : id}, process.env.JWT_SECRET, {
        expiresIn : '30d'
    })
};

module.exports = {registerUser, loginUser, secretController}