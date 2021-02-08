var express = require("express");
var router = express.Router();
var url = require("url");
var userTable = require('../db/dbData')
/* GET users listing. */
router.get("/", function (req, res) {
  res.send("respond with a resource");
});
/* GET users listing. */
router.get("/getSignUP", function (req, res) {
  let urlParts = url.parse(req.url, true);
  let query = urlParts.query;

  if(query.password === query.confirm){
    userTable.insertMany([query,(err)=>{
      if(err){
        res.send("user creation failed");
        return;
      }
      console.log(query);
      res.send("user creation successful");
    }])
  }
  
});
router.get("/getLogin", function (req, res) {
  let urlParts = url.parse(req.url, true);
  let query = urlParts.query;

  userTable.findOne(query).exec(function (err, user) {
    console.log(err,user, "*******logging err and user")
    if (err || !user){
      res.send("user not found");
      console.log("login fail")
    }else{
      res.send(JSON.stringify(user));
      console.log("login pass")

    }
  });
 
});
router.get("/getForgotPassword", function (req, res) {
  let urlParts = url.parse(req.url, true);
  let query = urlParts.query;
  userTable.updateOne({email: query.email},{password:query.password},function(err,user){
    if(err){
      res.send("cant update");
    }
    else{
      res.send(JSON.stringify(user));
    }
  })

});

module.exports = router;

