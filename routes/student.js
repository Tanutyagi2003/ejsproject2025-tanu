const express=require('express')
const multer=require('multer')  //for image ko ek imidiate folder bna kr image ko show krna, fir image ko cloudinary k paas bhej kr usse url lena
const StudentController=require('../controllers/StudentController')
const router =express.Router();

const upload=multer({
    storage:multer.diskStorage({}),
    limits:{fileSize:10*1024*1024},
})

//********************************************/
router.get('/add/student',(req,res)=>{    
StudentController.addStudent(req,res);
})

//********************************************/
router.post('/add/student',upload.single('studentImage'),(req,res)=>{
StudentController.addStudent(req,res);
})

//********************************************/
router.get('/delete/student/:_id',(req,res)=>{
    StudentController.deleteStudent(req,res);
})

//********************************************/
router.get('/edit/student/page/:_id',(req,res)=>{
    StudentController.openEditPage(req,res);
})

//********************************************/
router.post('/edit/student/:_id',(req,res)=>{
   StudentController.editStudent(req,res);
})

module.exports=router;