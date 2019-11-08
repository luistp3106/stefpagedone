const { Router } = require('express');
const router = Router();
const fs = require('fs');
const path = require('path');
const directorypath = path.join(__dirname, '../public/img/uploads/');


const Image = require('../models/image');

router.get('/index', (req, res) => {
    let list = [];
    fs.readdir(directorypath, function (err, files) {
        if (err) {
            return console.log('unable to scan directory:' + err);
        }
        files.forEach(function (file) {
            list.push(file);
        });
        console.log(list);
        res.render('index', { list });
    });
});

router.get('/upload', (req, res) => {
    res.render('upload');

});

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/groomsmen', (req, res) => {
    res.render('groomsmen');
});
router.get('/accomodation', (req, res) => {
    res.render('accomodation');
});

router.get('/bridesmaid', (req, res) => {
    res.render('bridesmaid');
});

router.get('/our-story', (req, res) => {
    res.render('our-story');
});


router.post('/upload', async (req, res) => {
    const image = new Image();
    image.title = req.body.title;

    image.description = req.body.description;
    image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
    image.originalname = req.file.originalname;
    image.mimetype = req.file.mimetype;
    image.size = req.file.size;
    res.redirect('/index');
});

router.get('/image/:id', (req, res) => {
    res.send('profile image');

});

module.exports = router;





