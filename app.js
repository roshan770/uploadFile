var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

var dbConn = mongodb.MongoClient.connect("mongodb://localhost:27017");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "public")));

// app.get("/view-feedbacks", function(req, res) {
//   dbConn.then(function(db) {
//     db.collection("feedbacks")
//       .find({})
//       .toarray(data)
//       .then(function(feedbacks) {
//         res.status(200).json(feedbacks);
//       });
//   });
// });
app.get("/view-feedbacks", function(req, res) {
  dbConn.then(client => {
    const db = client.db("feedbacks");
    db.collection(atendees.checkin)
      .find({})
      .toRow()
      .then(function(feedbacks) {
        res.status(200).json(feedbacks);
        atendees.checkin = " ";
      })
      .catch(err => {
        throw err;
      });
  });
});

app.listen(process.env.PORT || 8000, process.env.IP || "0.0.0.0");
