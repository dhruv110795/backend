const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const fs = require('fs')

const routes = require("./routes/route.js");

require("./db/db.js");

const port = 3001;

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", routes);

// Below code is to initially upload the sample COVID Data to Database

// const CovidData = require("./db/models.js");
// const SampleJSONFile = JSON.parse(
//     fs.readFileSync("./sample_data/covid-data.json", "utf-8")
// );
// const uploadDataToServer = async () => {
//     try {
//         await CovidData.create(SampleJSONFile);
//         console.log("Covid Data uploaded successfully");
//     } catch (error) {
//         console.log("error", error);
//     }
// };

// uploadDataToServer();

app.listen(port, function () {
    console.log("Runnning on " + port);
});

module.exports = app;
