const express = require("express");
const app = express();
const port = 5000;
const request = require("request");
const fs = require("fs");

let i = 0;
app.get("/download", (req, res) => {
  let URL = req.search;
  let resolutionWidth = req.Width;
  let resolutionHeight = req.Height;
  res.send(URL);
  request(
    {
      url: "https://api.apiflash.com/v1/urltoimage",
      encoding: "binary",
      qs: {
        access_key: "47280b42d706435e88cc69df2d7670e0",
        url: "https://surveysparrow.com",
      },
    },
    (error, response, body) => {
      if (error) {
        console.log(error);
      } else if (response) {
        i = i + 1;
        // res.send(body);
        fs.writeFile(`./screenshots${i}.jpeg`, body, "binary", (error) => {
          console.log(error);
        });
      }
    }
  );
});

app.get("/", (req, res) => res.send("Hello World!!!"));

app.listen(port, () =>
  console.log(`ScreenShot app listening on port ${port}!`)
);
