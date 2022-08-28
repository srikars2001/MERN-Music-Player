const Music = require('../models/music-model')

createMusic = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide music details',
        })
    }

    const music = new Music(body)

    if (!music) {
        return res.status(400).json({ success: false, error: err })
    }

    music
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: music._id,
                message: 'Music created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Music not created!',
            })
        })
}

/* create music app func ok */

updateMusic = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Music.findOne({ _id: req.params.id }, (err, music) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Music not found!',
            })
        }
        music.name = body.name
        music.url = body.url
        music.artist = body.artist
        music.rating = body.rating
        music
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: music._id,
                    message: 'Music updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Music not updated!',
                })
            })
    })
}

/* Update Music ok */


getMusic = async (req, res) => {
    await Music.find({}, (err, music) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!music.length) {
            return res
                .status(404)
                .json({ success: false, error: `Music not found` })
        }
        return res.status(200).json({ success: true, data: music })
    }).catch(err => console.log(err))
}

/* getMusic ok */
getMusicById = async (req, res) => {
    await Music.findOne({ _id: req.params.id }, (err, music) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!music) {
            return res
                .status(404)
                .json({ success: false, error: `Music not found` })
        }
        return res.status(200).json({ success: true, data: music })
    }).catch(err => console.log(err))
}

module.exports = {createMusic,
    updateMusic,
    getMusic,
    getMusicById
}
