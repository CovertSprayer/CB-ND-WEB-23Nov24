const jwt = require("jsonwebtoken");
const { UserModel } = require("../models");
const { JWT_SECRET } = process.env;

module.exports.isAuthenticated = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization || "";
    const token = bearerToken.split(" ").pop();

    const isValid = jwt.verify(token, JWT_SECRET);

    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const userId = isValid.data.id;
    const user = await UserModel.findById(userId).select("-password");
    req.user = user;
    next();
  } catch (error) {
     res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error!",
    })
  }
};

