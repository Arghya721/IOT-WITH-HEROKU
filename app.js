const express = require("express");
const { parse } = require("path");
const path = require("path");
const bodyparser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
var urlencodedParser = bodyparser.urlencoded({ extended: false })
app.use(express.json());

const led = [
    { ledno: 1 , status: 0 }
];

//Express Specific stuff
app.use('/static',express.static('static'))
app.use(express.urlencoded())

//PUG Specific Stuff
app.set('view engine', 'pug') //Set the template engine as pug
app.set('views',path.join(__dirname,'views')) //Set the views directory


app.get('/', (req,res) =>{
    const params = { };
    res.status(200).render('index.pug',params);
    // res.send(led);
})

app.get('/status', (req,res) =>{
    const params = { };
    
    res.send(led);
})


app.put('/:ledno' , (req,res) => {
    const leds = led.find(c => c.ledno== parseInt(req.params.ledno));
    if(!leds)
        return res.status(404).send('The led was not found');
    
    leds.status = req.body.status;
    res.send(led);
})

app.get('/status/:ledno' , (req,res)=>{
    const leds = led.find(c => c.ledno== parseInt(req.params.ledno));
    if(!leds)
        return res.status(404).send('The led was not found');
    
    //console.log(stat);
    res.send(leds.status.toString());
})



//port
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Listening on port ${port}....`));