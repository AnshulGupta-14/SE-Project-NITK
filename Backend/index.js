const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const mongoose = require("mongoose");
const Users = require("./Models/Users");
const Products = require("./Models/Products");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const app = express();
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


mongoose.connect("mongodb://localhost:27017/testdb").then(()=>{
  console.log("Connected to MongoDB");
}).catch(err => {
  console.log("Error connecting to MongoDB", err);
});

app.get("/", function (req, res) {
  res.send("Server is running");
});

app.post('/signup',(req, res) => {
  const { username, password, email, mobile, regno, name } = req.body;
  const user = new Users({ username: username, password: password, email: email, mobile: mobile, regno: regno, name: name });
  user
   .save()
   .then(() => {
      res.send({ message: "User saved" });
    })
   .catch(() => {
      res.send({ message: "Failed to save user" });
    });
})

app.post("/login", function (req, res) {
  const { username, password } = req.body;
  Users.findOne({ username: username })
    .then((result) => {
      if (result) {
        if (result.password === password) {
          const token = jwt.sign({ data: result }, "secretkey", {
            expiresIn: "1h",
          });
          res.send({ message: "Login successful", token: token });
        } else res.send({ message: "Wrong password" });
      } else res.send({ message: "User not exist" });
    })
    .catch(() => {
      res.send({ message: "User not exist" });
    });
});

app.post("/add-product",upload.single("image"), (req, res) => {
  const { title, price, description, category } = req.body;
  const product = new Products({
    title: title,
    price: price,
    description: description,
    category: category,
    // image: req.file.path,
  });
  product
    .save()
    .then(() => {
      res.send({ message: "Product saved" });
    })
    .catch(() => {
      res.send({ message: "Failed to save product" });
    });
});

app.get("/get-products", function (req, res) {
  Products.find()
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      res.send({ message: "Failed to get products" });
    });
});

app.get("*", function (req, res) {
  res.send("Route not find");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
