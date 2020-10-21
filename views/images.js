
var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
  destination: './public/upload/images',
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname)
  }
})

var upload = multer({ storage: storage })

/* GET create blog. */
router.get('/create', function(req, res, next) {
  res.render('create', {title: 'Create Blog'});
});

/*single file upload*/
router.post('/upload', upload.single('imageUpload'), function(req, res, next) {
  var fileinfo = req.file;
  var title = req.body.title;
  console.log(title);
  res.send(fileinfo);
})

/*multiple files upload*/
router.post('/uploads', upload.array('imageUpload', 5), function(req, res, next) {
  var fileinfo = req.files;
  var title = req.body.title;
  console.log(title);
  res.send(fileinfo);
})

module.exports = router;	

/*const express = require('express');
const router = express.Router();
const multer = require('multer');
const ejs = require('ejs');



var filenameImg = '';

const imageStorage = multer.diskStorage({
    destination: './public/upload/images',
    filename: function(req, file, cb){
      filenameImg = Date.now() + '-' + path.basename(file.originalname);
      cb(null, filenameImg);
    }
  }); 

  // Init Image Upload

  const uploadImg = multer({
  storage: imageStorage,
  limits: {fileSize: 10000000},
  fileFilter: function(req, file, cb){
    checkImageFileType(file,cb);
  }
}); 

//check Image File Type
function checkImageFileType(file, cb){
  const filetypes = /jpeg|jpg|png|gif|pdf/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null, true);
  } else {
    cb('Error: Images Only');
  }
} 

router.get('/create', function(req, res, next) {
  res.render('create', {title: 'Create Blog'});
});

router.post('/upload-images', uploadImg.array('imageUpload', 5),  function (req, res) {
    var fileinfo = req.files;
    var title = req.body.title;
    console.log(title);
    res.send(fileinfo);

   
});

module.exports = router;*/