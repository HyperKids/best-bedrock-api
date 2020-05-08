var express = require("express");
var app = express();
const request = require("request");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.get("/api/v1/uuid/:user", function (req, res) {
  if (req.params.user.charAt(0) == "*") {
    let bedrockuser = req.params.user.substr(1)
    request({url: "https://xapi.us/v2/xuid/"+bedrockuser, headers: {"X-AUTH": process.env.xapiauth}}, (err, res2, body) => {
      if (err) {
        res.json({
          error: true,
          errormsg: err
        })
        return console.log(err);
      }

      res.json({
        name: req.params.user,
        type: "bedrock",
        uuid: convertbedrock(body)
      })
    })
  } else {
    request(
      "https://api.mojang.com/users/profiles/minecraft/"+req.params.user,
      { json: true },
      (err, res2, body) => {
        if (err) {
          res.json({
            error: true,
            errormsg: err
          })
          return console.log(err);
        }
        res.json({
          name: body.name,
          type: "java",
          uuid: body.id
        })
      }
    );
  }
});

function convertbedrock(uuid) {
  let uuidhex = parseInt(uuid).toString(16)
  while (uuidhex.length < 32) uuidhex = "0" + uuidhex;
  return uuidhex;
}

app.listen(process.env["PORT"] || 3001);
