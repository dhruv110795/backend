const CovidData = require("../db/models");

exports.getAllData = async (req, res) => {
    var api_response = {}
    var db_response = await CovidData.find({})
    if (db_response.length > 0) {
        api_response.message = "success";
        api_response.total = db_response.length
        api_response.data = db_response
    } else {
        api_response.message = "failure";
    }
    res.json(api_response)
}