const mongoose =require('mongoose')

require('dotenv/config')

mongoose.connect('mongodb://127.0.0.1:27017/ngo_test',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}
)

const ngo = mongoose.model('ngos',{
    name: {
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    number:{
        type:String,
        trim:true
    },
    place:{
        type:String,
        trim:true
    },
    state:{
        type:String,
        trim:true
    },
    des:{
        type:String,
        trim:true
    },
    url:{
        type:String,
        trim:true
    },
    verified:{
        type:Boolean,
        default:false
    }
})

module.exports = ngo