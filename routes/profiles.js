const express = require('express')
const router = express.Router()
const profilesController = require('../controllers/profiles') 
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, profilesController.getProfile)

router.post('/createProfile', profilesController.createProfile)

// router.put('/markComplete', profilesController.markComplete)

// router.put('/markIncomplete', profilesController.markIncomplete)

// router.delete('/deleteProfile', profilesController.deleteProfile)

module.exports = router