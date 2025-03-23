const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/testDB")
  .then(() => console.log("DB connected!"))
  .catch(err => console.log("Error in connecting to DB", err))

  const blogSchema = mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    author: String,
    body:String
  })

const modelName = "testBlog";
// const Blog = mongoose.model("Blog", blogSchema);
const Blog = mongoose.model("Blog", blogSchema, modelName);

async function main(){
  // ------------------------- insert one blog
  // const blog = new Blog({
  //   "title": "The Great Adventure",
  //   "author": "John Doe",
  //   "body": "This is the story of an epic journey across the world, full of twists and turns that test the strength of the human spirit."
  // })

  // await blog.save();

  // const blog = await Blog.create({
  //   "title": "A Day in the Life",
  //   "author": "Jane Smith",
  //   "body": "An exploration of the daily experiences of a young woman balancing her career, relationships, and personal growth in a bustling city."
  // })

  // console.log("Blog created successfully", blog);

  // ------------------------- insert many blogs
  // const blogs = await Blog.create([{
  //   "title": "The Great Adventure",
  //   "author": "John Doe",
  //   "body": "This is the story of an epic journey across the world, full of twists and turns that test the strength of the human spirit."
  // },
  // {
  //   "title": "A Day in the Life",
  //   "author": "Jane Smith",
  //   "body": "An exploration of the daily experiences of a young woman balancing her career, relationships, and personal growth in a bustling city."
  // },
  // {
  //   "title": "The Lost Treasure",
  //   "author": "Robert Brown",
  //   "body": "A thrilling tale of a group of explorers searching for a hidden treasure that could change the course of history forever."
  // },
  // {
  //   "title": "The Silent Forest",
  //   "author": "Emily Clark",
  //   "body": "In a quiet, mysterious forest, secrets unfold as a young botanist discovers a rare species of plant that holds extraordinary powers."
  // },
  // {
  //   "title": "Tech and the Future",
  //   "author": "Alice Johnson",
  //   "body": "A deep dive into the world of technology, exploring how artificial intelligence and robotics will shape the future of human society."
  // }]);

  // console.log(blogs);


  // -------------------- read
  // const blogs = await Blog.find();
  // console.log(blogs)

  // const blog = await Blog.find({_id: "67df978336383e6500423012"});
  // console.log(blog);

  // const blogs = await Blog.find({author: "Jane Smith"});
  // console.log(blogs);

  // const blog = await Blog.findOne({author: "Jane Smith"});
  // console.log(blog);

  // ----------------------- update
  // const res = await Blog.updateMany({author: "Jane Smith"}, {author: "Jane Smith part 2"})
  // console.log(res);

  // const res = await Blog.updateOne({author: "Emily Clark"}, {body: "test"})
  // console.log(res);

  // ------------------------------ delete

  // const res = await Blog.deleteOne({body: "test"});
  // console.log(res);

  // const res = await Blog.deleteMany({author: "Jane Smith part 2"});
  // console.log(res);

  // const res = await Blog.deleteMany();
  // console.log(res);

  // ------------------------------ operations with _id

  // const blog = await Blog.findById("67dfa470290329dded161ec6");
  // console.log(blog);

  // const blog = await Blog.findByIdAndUpdate("67dfa470290329dded161ec6", {
  //   title: "test 20", 
  //   author: "test 20"
  // }, { new: true });
  // console.log(blog);

  const blog = await Blog.findByIdAndDelete("67dfa470290329dded161ec6");
  console.log(blog);
  
}

main();

