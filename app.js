const express = require("express");
const app = express()
const path = require ('path');
const ejsMate = require('ejs-mate');
const fs = require('fs');


app.engine('ejs',ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views')); //去views資料夾拿ejs

app.use(express.static(path.join(__dirname,'public')));

app.use(express.static(__dirname + '/views/css'));





const file = path.join(__dirname, 'labmember.json');





app.get('/',(req,res)=>{
    res.render('main/index')
})


app.get('/pic/:picid',(req,res)=>{
    // console.log(req.params.picid);
    // console.log(__dirname);
    res.sendFile(__dirname + `/pic/${req.params.picid}`);
})

app.get('/index',(req,res)=>{
    res.render('main/index')
})
app.get('/ch-peng',(req,res)=>{
    res.render('main/ch-peng')
})
app.get('/tp-liang',(req,res)=>{
    res.render('main/tp-liang')
})

app.get('/labmember',  (req,res)=>{
  

        var jsonData=   fs.readFile(file, 'utf8', function async(err, data) {
        if (err) {
        console.log(err);
            return;
        }
        else{
            const totaldatas = JSON.parse(data); 
            // for(let year of totaldata){
            //     console.log(year.year);
            //     for(let member of year.member){
            //         console.log(member);
            //         }
            // }
           
           // console.log(finaldata);
            //console.log(totaldatas);
           res.render('main/labmember',{totaldatas});
        }
        
        });
     
 
       
  
})

const port = process.env.PORT || 3000 ;
app.listen(port,() => {
    console.log(`Listening on port${port}`);
})