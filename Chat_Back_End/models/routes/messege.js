const router = require('express').Router();
let Messege = require('../messege.model');

router.route('/').get((req,res)=>{
    Messege.find()
        .then(messeges => res.json(messeges))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req,res) => {
    const text = req.body.text;
    const image = req.body.image;
    const user = {name:req.body.sendby , renderUsernameOnMessage:req.body.renderUsernameOnMessage};
    const createdAt= new Date();
    //const name=req.body.sendby;
    //const renderUsernameOnMessage=req.body.renderUsernameOnMessage;


    const newMessege = new Messege({text , image ,createdAt,user});

    newMessege.save()
        .then(()=> res.json('Messege added!'))
        .catch(err=>res.status(400).json('Error: '+err));
});

module.exports = router;