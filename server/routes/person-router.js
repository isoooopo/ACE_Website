const express = require('express')

const PersonCtrl = require('../control/person-control')

const router = express.Router()

// Set up multer for storing images: -- https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
var multer = require('multer')
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
var upload = multer({storage: storage})

router.post('/person', upload.single('image'), PersonCtrl.createPerson)
router.put('/person/:name', upload.single('image'), PersonCtrl.updatePersonbyName)
router.put('/person/id/:id', upload.single('image'), PersonCtrl.updatePersonbyID)
router.delete('/person/:name', PersonCtrl.deletePersonbyName)
router.delete('/person/id/:id', PersonCtrl.deletePersonbyID)
router.get('/person/:title', PersonCtrl.getPersonbyTitle)
router.get('/person/:email', PersonCtrl.getPersonbyEmail)
router.get('/people', PersonCtrl.getPeople)
router.get('/people/:officer', PersonCtrl.getPeoplebyOfficer)

module.exports = router