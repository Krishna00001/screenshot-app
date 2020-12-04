const express = require("express");
const app = express();
const port = 5000;
const request = require("request");
const fs = require("fs");
app.get("http:localhost", (req, res) => {
  res.send;
});
app.get("/download", (req, res) => {
  request(
    {
      url: "https://api.apiflash.com/v1/urltoimage",
      encoding: "binary",
      qs: {
        access_key: "3e549a0c3c0847a88a6b189974352485",
        url: "https://google.com",
      },
    },
    (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        // res.send(body);
        res.send(response);
        let fileName = JSON.stringify(`${response.date}`);
        fs.writeFile("./screenshots.jpeg", body, "binary", (error) => {
          console.log(error);
        });
      }
    }
  );
});

app.get("/", (req, res) => res.send("Hello World!!!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
