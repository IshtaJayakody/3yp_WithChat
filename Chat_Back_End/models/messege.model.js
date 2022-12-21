const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messegeSchema = new Schema({
    
    
        text: {type:String},
        image:{type:String},
        createdAt:{type:Date},
        user: {
            name:{type: String},
            renderUsernameOnMessage:{type:Boolean},
        },
        //avatar: 'https://placeimg.com/140/140/any',
        //avatar: null,
        
        
    
    
},{
    timestamps:true,
});

const Messege = mongoose.model('Messege',messegeSchema);
module.exports = Messege;