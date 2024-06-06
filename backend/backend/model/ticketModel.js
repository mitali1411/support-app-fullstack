const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    product : {
        type : String,
        enums : ['iPhone', 'iPad', 'iMac', 'MacBook', 'iWatch'],
        required : true
    },
    description : {
        type : String,
        required : [true, 'Please Type Description']
    },
    status : {
        type : String,
        enums : ['open', 'new', 'closed'],
        required : true,
        default : 'new'
    }
},{
    timestamps : true
});


module.exports = mongoose.model('Ticket', ticketSchema)