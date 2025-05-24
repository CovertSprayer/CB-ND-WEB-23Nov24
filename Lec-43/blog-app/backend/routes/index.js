
const router = require("express").Router();
const authRoutes = require("./auth.routes")

router.use("/auth", authRoutes);
// router.use("/blogs", blogRoutes);

module.exports = router;