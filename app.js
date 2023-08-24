const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
port = 8000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/:name", async (req, res) => {
  //   config = {
  //     params: {
  //       q: kolkata,
  //       appid: eea90397c3ba6ef85198f1b574217416,
  //       units: metric,
  //     },
  //   };
  try {
    const { name } = req.params;
    //let searchName = "kolkata";
    dataN = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=eea90397c3ba6ef85198f1b574217416&units=metric`
    );
    value = dataN.data;
    //console.log(dataN.data);
    res.render("index", value);
    //res.send("hola");
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`serving on port ${port}`);
});
