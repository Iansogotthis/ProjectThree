const StoryModel = require("../models/Story");



module.exports = {
  create,
  index
};

const { v4: uuidv4 } = require('uuid');
// uuid, helps generate our unique ids
const S3 = require('aws-sdk/clients/s3');
// initialize the S3 consturctor function to give us the object that can perform crud operations to aws
const s3 = new S3();

const BUCKET_NAME = process.env.S3_BUCKET



    async function create(req, res) {
       console.log(req.body, req.user)
       req.body.author = req.user._id
       req.body.authorName = req.user.username
        try{
          const storyFromTheDatabase = await StoryModel.create(req.body);
          res.json({storyFromTheDatabase});
        } catch(err) {
            console.log(err)
          res.json({err});
        }
      }
      
      
      
      
      
      
      
      
      
      
      
      
//     try {

//       const newStory = new StoryModel({
//         title: req.body.title,
//         author: req.body.author,
//         story: req.body.story,
//         emotion: req.body.emotion,
//       });
  
//       await newStory.save();
  
//       res.status(201).json(newStory);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
  

async function index(req, res) {
  try {
    // this populates the user when you find the posts
    // so you'll have access to the users information
    // when you fetch teh posts
    const stories = await StoryModel.find({})
    res.status(200).json({ stories });
  } catch (err) {
    res.json({error: err})
  }
}