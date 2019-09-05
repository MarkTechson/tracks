const router = require("express").Router();
const Track = require("../models/track");

router.get("/api/track", (req, res) => {
    Track.find({}).then(tracks => res.json(tracks));
});

router.get("/api/track/:id", (req, res) => {
    // complete this route!
    const id = req.params.id;
    Track.findById(id).then(track => res.json(track))
        .catch(err => res.status(422).json(err));
});

router.post("/api/track", (req, res) => {
    const trackData = req.body;

    Track.create(trackData)
        .then((result) => res.json(result))
        .catch(e => {
            console.log(e)
            res.sendStatus(500);
        });
});
router.put("/api/track/:id", (req, res) => {
    // complete this route!
    Track.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
        .then(tracks => res.json(tracks))
        .catch(err => res.status(404).json(err));
});

router.delete("/api/track/:id", (req, res) => {
    // Complete this route!
    const id = req.params.id;

    Track.remove({ _id: id })
        .then(track => res.json(track))
        .catch(e => res.status(404).json(e));
});


module.exports = router;