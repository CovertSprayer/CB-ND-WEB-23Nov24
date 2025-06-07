const { BlogModel } = require("../models");

module.exports.findAll = async (req, res) => {
  try {
    const blogs = await BlogModel.find().populate({
      path: "author",
      select: "-password"
    });

    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      data: blogs,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error!",
    })
  }
}

module.exports.findById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await BlogModel.findById(id);
    
    res.status(200).json({
      success: true,
      message: "Blog fetched",
      data: blog
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error!",
    })
  }
}

module.exports.create = async (req, res) => {
  try {
    const { title, content } = req.body;
    const author = req.user.id;

    const blog = await BlogModel.create({title, content, author});

    res.status(201).json({
      success: true,
      message: "Blog created",
      data: blog
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error!",
    })
  }
}

module.exports.update = async (req, res) => {
  try {
    const { id: blogId } = req.params;
    const { title, content } = req.body;
    const userId = req.user.id;

    if(!blogId) {
      res.status(400).json({
        success: false,
        message: "Blog ID required"
      })
    }

    // const blog = await BlogModel.findByIdAndUpdate(id, blogData, { new:true });
    const blog = await BlogModel.findOne({_id: blogId});

    if(blog.author != userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      })
    }

    if(title) blog.title = title;
    if(content) blog.content = content;
    await blog.save();

    res.status(200).json({
      success: true,
      message: "Blog updated",
      data: blog
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error!",
    })
  }
}

module.exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    let blog = await BlogModel.findById(id);

    if(blog.author != userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      })
    }

    blog = await BlogModel.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Blog deleted",
      data: blog
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error!",
    })
  }
}

