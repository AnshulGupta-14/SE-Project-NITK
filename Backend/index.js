const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const multer = require("multer");
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

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/local");
const Users = mongoose.model("Users", {
  username: String,
  password: String,
});
const Products = mongoose.model("Products", {
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
});

app.get("/", function (req, res) {
  res.send("Server is running");
});

app.post("/signup", function (req, res) {
  const { username, password } = req.body;
  const user = new Users({ username: username, password: password });
  user
    .save()
    .then(() => {
      res.send({ message: "User saved" });
    })
    .catch(() => {
      res.send({ message: "Failed to save user" });
    });
});

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

app.post("/add-product", upload.single("image"), (req, res) => {
  const { name, price, description, category } = req.body;
  const product = new Products({
    name: name,
    price: price,
    description: description,
    image: req.file.path,
    category: category,
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
