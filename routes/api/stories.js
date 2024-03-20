const express = require('express');
const router = express.Router();
const storiesCtrl = require('../../controllers/stories');

router.get('/', storiesCtrl.index)
router.post('/', storiesCtrl.create)


module.exports= router