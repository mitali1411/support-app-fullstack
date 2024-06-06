const mongoose = require ('mongoose');
 const noteSchema = new mongoose.Schema({

    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : false,
    },
    ticket : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Ticket',
        required : false,
    },
    comment : {
        type : String,
        required : [false, 'Please Describe your comment'],
    }
 },
{
    timestamps:true
});


module.exports = mongoose.model('Note', noteSchema)