const express = require('express');
const router = express.Router();
const storiesCtrl = require('../../controllers/stories');

router.get('/', storiesCtrl.index)
router.post('/', storiesCtrl.create)
router.get('/:id', storiesCtrl.show)
router.delete('/:id', storiesCtrl.delete)
router.post('/:id', storiesCtrl.createComment)
//router.get('/api/stories', storiesCtrl.getRandomStory);
module.exports= router