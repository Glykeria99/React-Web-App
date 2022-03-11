import Post from '../models/postMessage.js';
import express from 'express';

const PostRouter = express.Router();

PostRouter.route('/').get((req, res) => {
  Post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
});


export default PostRouter;