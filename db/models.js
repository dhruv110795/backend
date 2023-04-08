const { default: mongoose } = require("mongoose");

const covidSchema = mongoose.Schema({
    date: {
        type: Date
    },
    key: {
        type: String
    },
    new_confirmed: {
        type: Number
    },
    new_deceased: {
        type: Number
    }, new_recovered: {
        type: Number
    },
    total_confirmed: {
        type: Number
    },
    total_deceased: {
        type: Number
    },
    total_recovered: {
        type: Number
    }
})

// Creating the collection for Covid Data
const CovidData = mongoose.model("Covid", covidSchema)

module.exports = CovidData