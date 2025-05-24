const { UserModel } = require("../models");
const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

function createJWT(data) {
  const token = jwt.sign({
      data: data
    }, JWT_SECRET, { expiresIn: 7 * 24 * 60 * 60 });

  return token;
}

module.exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    
    const existingUser = await UserModel.findOne({email});
    if(existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({ fullName, email, password: hashedPassword });

    console.log(hashedPassword, user);

    const token = createJWT(user._id);

    res.status(200).json({
      success: true,
      data: {
        fullName,
        email,
        token
      }
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error!"
    })
  }
}

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // const bearerToken = req.headers.authorization;
    // const token = bearerToken.split(" ").pop();
    
    // const isValid = jwt.verify(token, JWT_SECRET);

    // if(!isValid) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Unauthorized"
    //   })
    // }
    
    // const userId = isValid.data;
    const user = await UserModel.findOne({email});
    
    if(!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials"
      })
    }

    const token = createJWT(user._id);

    res.json({
      success: true,
      data: {
        fullName: user.fullName,
        email: user.email,
        token
      }
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error!"
    })
  }
}

