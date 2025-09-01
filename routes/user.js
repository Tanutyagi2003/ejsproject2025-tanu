const express=require('express');   //1
const UserController=require('../controllers/UserController')//6
const router=express.Router();     //2



//http://locahost:3000
router.get('/',(req,res)=>{       //3
    res.render('home');
})

//http://locahost:3000/user/signup
router.get('/user/signup',(req,res)=>{   //4
    res.render('signup');
})

//http://locahost:3000/add/usere
router.post('/add/user',(req,res)=>{     //5
 UserController.addUser(req,res)
})

//http://locahost:3000/login
router.post('/login',(req,res) => {
    UserController.doLogin(req,res);
})

//http://locahost:3000/student/add/page
router.get('/student/add/page',(req,res)=>{
    res.render('addstudent')
})



module.exports=router;

