const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Contact = require('../model/Contact');

router.post('/addContact', (req, res) => {
    const {nom,email,phone} = req.body;

    const newContact = new Contact({nom,email,phone})
    newContact.save()
            .then((contacts) => res.send(contacts))
            .catch((err) => res.status(400).send("Error" + err));
})

router.get('/all', (req, res) => {
    Contact.find().then(contacts => {
        res.send(contacts)
    })
        .catch(() => { console.log('erreur get') })
})

router.get('/contact/:id', (req, res)=> {
    const {_id} = req.params;
    Contact.findOne({_id})
        .then(contacts => res.send(contacts))
        .catch((err)=> console.log(err))
});



module.exports = router;