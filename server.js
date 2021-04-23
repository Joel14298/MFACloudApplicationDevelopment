let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let routes = require("./routes");

let app = express();

// DB Conection
const MongoClient = require("mongodb").MongoClient;
const { request } = require("http");
const { response } = require("express");
const uri =
  "mongodb+srv://Joel14298:123456.@cluster0.0pbdt.mongodb.net/Users?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let collection;
client.connect((err) => {
  collection = client.db("Save_Business_DB").collection("Save_Business_Users");

  console.log("User is connected");
});

var port = process.env.PORT || 8082;

app.use(express.static(__dirname + "/public"));

app.use("/", routes({ client }));

app.listen(port);
console.log("Listening to port", port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", function (req, res) {
  console.log();
  res.json({ message: "ok" });
  client.close();
});

require("cf-deployment-tracker-client").track();
