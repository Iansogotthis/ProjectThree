const StoryModel = require("../models/Story");

module.exports = {
  create,
  index,
  show,
  delete: deleteStory,
}
async function deleteStory(req, res){
	try {
		// find the story by ID
		const StoryDoc = await StoryModel.findOneAndDelete({id: req.params.id})
    console.log(StoryDoc)
		
		// responsd to the client (tell the browser to make a request to the /movies/idfajdksljfadkf) (show page)
		res.json({message: "deleted object"})
	} catch(err){
		console.log(err)
		res.send(err)
	}
}


const { v4: uuidv4 } = require("uuid");
// uuid, helps generate our unique ids
const S3 = require("aws-sdk/clients/s3");
// initialize the S3 consturctor function to give us the object that can perform crud operations to aws
const s3 = new S3();

const BUCKET_NAME = process.env.S3_BUCKET;

// async function getRandomStory (req, res)  {
//   try {
//     const story = await Story.aggregate([{ $sample: { size: 1 } }]);
//     res.json(story[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

async function show(req, res) {
  try {
    const story = await StoryModel.findById(req.params.id);
    console.log(story, "story")
    console.log(req.params.id, "req.params.id"  )
    if (!story) {
      return res.status(404).json({ message: "Story not found" });
    }
    res.json(story);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
}
async function create(req, res) {
  console.log(req.body, req.user);
  req.body.author = req.user._id;
  req.body.authorName = req.user.username;
  try {
    const storyFromTheDatabase = await StoryModel.create(req.body);
    res.json({ storyFromTheDatabase });
  } catch (err) {
    console.log(err);
    res.json({ err });
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
    const stories = await StoryModel.find({});
    res.status(200).json({ stories });
  } catch (err) {
    res.json({ error: err });
  }
}
