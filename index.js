const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000 

const category = require('./Data/catagoris.json')

app.use(cors());
app.get('/',(req,res)=>{
    res.send('Dragon is running');
});
app.get('/category',(req,res)=>{
    res.send(category);
});

app.listen(port,()=>{
    console.log(`Dragon API is running`);
})
