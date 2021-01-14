const  express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const fileuploader= require('express-fileupload')
const path = require('path');
const PORT = 5000

// import routes 
 const profiles = require('./routes/profiles');




// middelwares
app.use(fileuploader());
app.use(express.json())
app.use(express.urlencoded({extended: true,}))
app.use(express.static(path.join(__dirname, 'static')));

nunjucks.configure('templates',{
    autoescape: true,
    express: app
});


//routes
app.use(profiles)
  
app.get('/',(req,res)=>{
    res.render('home.html')
});







 app.listen(PORT,()=>{
     console.log(`listening on  port ${PORT}`)

 });