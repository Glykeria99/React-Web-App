import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: String,
    title: String,
    description: String,
    date: Date,
});

const Post = mongoose.model('Post', PostSchema);

export default Post;
