const User=require('./models/User');
const bcrypt=require('bcrypt')

async function makeAdmin(){
    try{
        let user=await User.findOne({email:'tanu439@gamil.com'});
        if(user)
        {
            console.log("user updated")
        }
        else
        {
          user=new User();
          user.firstName='Tanu';
          user.lastName='Tyagi';
          user.email='tanu439@gamil.com';
          let encryptedPassword=bcrypt.hashSync('123456',10);
          user.password=encryptedPassword;
          user.userType='Admin';
          await user.save();
          console.log('user saved sucessfully...');
        }
     
    }
    catch(err){
     console.log(err)   
    }
}

module.exports=makeAdmin;