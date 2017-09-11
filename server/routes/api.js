const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Video = require('../modules/video');

const db = "mongodb://artem:artem@ds127894.mlab.com:27894/mean_test_saribekyan";
mongoose.Promise = global.Promise;
mongoose.connect(db, { useMongoClient: true }, function(err) {
  if ( err ) {
    console.log('Database error! ' + err);
  }
});

router.get('/videos', function(req, res) {
  console.log("Get all videos");
  Video.find({})
    .exec(function(err, videos) {
      if ( err ) {
        res.send('Videos error! ' + err);
      } else {
        res.json(videos);
      }
    })
});

router.get('/video/:id', function(req, res) {
  console.log("Get a single video");
  Video.findById(req.params.id)
    .exec(function(err, video) {
      if ( err ) {
        console.log('Video error! ' + err);
      } else {
        res.json(video);
      }
    })
});

router.post('/video', function(req, res) {
  console.log('Post a video');
  let newVideo = new Video();
  newVideo.title = req.body.title;
  newVideo.url = req.body.url;
  newVideo.description = req.body.description;
  newVideo.save(function(err, insertedVideo) {
    if ( err ) {
      console.log('Error saving video! ' + err);
    } else {
      res.json(insertedVideo);
    }
  });
});

router.put('/video/:id', function(req, res) {
  console.log('Update a video');
  Video.findByIdAndUpdate(req.params.id, {
      $set: {
        title: req.body.title,
        url: req.body.url,
        description: req.body.url
      },
    },
    {
      new: true,
    }, function(err, updatedVideo) {
      if ( err ) {
        res.send('Error updating video!');
      } else {
        res.json(updatedVideo);
      }
    });
});

router.delete('/video/:id', function(req, res) {
  console.log("Delete a single video");
  Video.findByIdAndRemove(req.params.id, function(err, deletedVideo) {
    if ( err ) {
      res.send('Error deleting video!');
    } else {
      res.json(deletedVideo);
    }
  });
});

module.exports = router;