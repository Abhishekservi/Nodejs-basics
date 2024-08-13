const moongose = require("mongoose");

async function connectMongoDb(url) {
    return moongose.connect(url);
}

module.exports = connectMongoDb;