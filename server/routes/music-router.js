const express = require('express')

const Musicctrl = require('../controllers/music-ctrl')

const router = express.Router()

router.post('/music', Musicctrl.createMusic)
router.put('/music/:id', Musicctrl.updateMusic)

router.get('/musics', Musicctrl.getMusic)
router.get('/music/:id', Musicctrl.getMusicById)

module.exports = router

/* all ok */