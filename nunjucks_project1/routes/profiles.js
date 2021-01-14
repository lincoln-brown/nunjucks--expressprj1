const express = require('express');
const router = express.Router();
let user = require('../Users');

//--------------------------------------------------------------------------
router.get('/profiles',(req,res)=>{
    
    res.render('profiles.html',{users:user})
});
//---------------------------------------------------------------------------
router.get('/add_profile',(req,res)=>{
      
 
    res.render('AddProfile.html')
});

//---------------------------------------------------------------------------

router.post('/add_profile', (req,res)=>{
    let  data= req.body
    
     
     if (req.files||req.body.length()>0 ){
         uploadfile= req.files.fileupload;
         uploadfilepath= "static/uploads/"+ uploadfile.name;
         data.photo="uploads/"+uploadfile.name
         
             
         // console.log(data)
        
         uploadfile.mv(uploadfilepath,(error)=>{
             if(error){
                 console.log(`an error occured, error is ${error}`)
 
             }else{
                 user.push(data)               
                 res.render('profiles.html',{users:user})
                 console.log(`All went well`)
             }
        });
 
 
        
     }else{
         //file was not uploaded handel correctly 
         res.render('AddProfile.html')
     }
 
 
 });

module.exports = router ;