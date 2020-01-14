const express =require('express');
const path = require('path');
const app=express();

app.use(express.static(path.join(__dirname,'react-hyf-client/build')))

app.get('/route',(req,res)=>{
var list=[1,2,3,4,5]
res.json(list)
});
const port =process.env.PORT || 5000;
app.listen(port);