const mongoose=require('mongoose');  //1

async function connect(){          //2
    try
    {
     await mongoose.connect('mongodb://localhost:27017/ejsstudentproject');
     console.log("db connected*******");
    }
    catch(err)
    {
        console.log(err)
    }
}
module.exports=connect;  //3