const { Product } = require("./models");
const mongoose = require("mongoose");

//  mongodb connection
mongoose.connect("mongodb://127.0.0.1:27017/E_com_Dec")
  .then(() => console.log("DB connected!"))
  .catch(err => console.log("Error in connecting to DB", err))


const products = [
  {
    title: "Drone",
    price: 20000,
    description: "Which drone with camera is right for you? Discover the best camera drones like DJI Mavic 3 Pro, DJI Mini 3 Pro, DJI Air 2S and more!",
    image: "https://m.media-amazon.com/images/I/51PpwI26rXL._AC_SL1500_.jpg"
  },
  {
    title: "Drone",
    price: 20000,
    description: "Which drone with camera is right for you? Discover the best camera drones like DJI Mavic 3 Pro, DJI Mini 3 Pro, DJI Air 2S and more!",
    image: "https://m.media-amazon.com/images/I/51PpwI26rXL._AC_SL1500_.jpg"
  },
  {
    title: "Drone",
    price: 20000,
    description: "Which drone with camera is right for you? Discover the best camera drones like DJI Mavic 3 Pro, DJI Mini 3 Pro, DJI Air 2S and more!",
    image: "https://m.media-amazon.com/images/I/51PpwI26rXL._AC_SL1500_.jpg"
  },
  {
    title: "Drone",
    price: 20000,
    description: "Which drone with camera is right for you? Discover the best camera drones like DJI Mavic 3 Pro, DJI Mini 3 Pro, DJI Air 2S and more!",
    image: "https://m.media-amazon.com/images/I/51PpwI26rXL._AC_SL1500_.jpg"
  },
  {
    title: "Drone",
    price: 20000,
    description: "Which drone with camera is right for you? Discover the best camera drones like DJI Mavic 3 Pro, DJI Mini 3 Pro, DJI Air 2S and more!",
    image: "https://m.media-amazon.com/images/I/51PpwI26rXL._AC_SL1500_.jpg"
  },
  {
    title: "Drone",
    price: 20000,
    description: "Which drone with camera is right for you? Discover the best camera drones like DJI Mavic 3 Pro, DJI Mini 3 Pro, DJI Air 2S and more!",
    image: "https://m.media-amazon.com/images/I/51PpwI26rXL._AC_SL1500_.jpg"
  },
  {
    title: "Drone",
    price: 20000,
    description: "Which drone with camera is right for you? Discover the best camera drones like DJI Mavic 3 Pro, DJI Mini 3 Pro, DJI Air 2S and more!",
    image: "https://m.media-amazon.com/images/I/51PpwI26rXL._AC_SL1500_.jpg"
  },
  {
    title: "Drone",
    price: 20000,
    description: "Which drone with camera is right for you? Discover the best camera drones like DJI Mavic 3 Pro, DJI Mini 3 Pro, DJI Air 2S and more!",
    image: "https://m.media-amazon.com/images/I/51PpwI26rXL._AC_SL1500_.jpg"
  },

]

async function seedDB(){
  try {
    await Product.deleteMany();
    await Product.create(products);
    
    console.log("DB seeded successfully!");
  } catch (error) {
    console.log("Error in seeding DB", error);
  } finally{
    process.exit();
  }

  
}

seedDB();