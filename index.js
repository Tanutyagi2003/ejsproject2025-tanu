const express=require('express');                 //1
const path=require('path');                       //2
const connect=require('./connection') ;           //7
const user=require('./routes/user');            //9
const student=require('./routes/student')
const makeAdmin=require('./makeadmin')

const  app=express();                             //3
app.use(express.urlencoded({extended:false}))
app.use(user);                                    //10
app.use(student);

connect();                                       //8      
makeAdmin();                      

app.set('view engine','ejs');                    //5
app.set('views',path.resolve('./views'));        //6

app.listen(3000,(err)=>                         //4
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("server is runnig on 3000")
    }
})