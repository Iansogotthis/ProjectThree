const express = require('express');
const router = express.Router();
const storiesCtrl = require('../../controllers/stories');

router.get('/', storiesCtrl.index)
router.post('/', storiesCtrl.create)
router.get('/random', storiesCtrl.getRandomStory);
router.get('/:id', storiesCtrl.show)
router.delete('/:id', storiesCtrl.delete)
router.post('/:id', storiesCtrl.createComment)


module.exports= router