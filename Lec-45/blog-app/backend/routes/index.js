
const router = require("express").Router();
const authRoutes = require("./auth.routes");
const blogRoutes = require("./blog.routes");
const { isAuthenticated } = require("../middlewares/auth.middleware");

router.use("/auth", authRoutes);
router.use("/blogs", isAuthenticated, blogRoutes);

module.exports = router;