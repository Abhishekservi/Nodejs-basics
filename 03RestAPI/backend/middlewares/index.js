const fs = require("fs");

function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(
            filename,
            `${Date.now()} Request Method: ${req.method} Request URL: ${req.path} \n`,
            (err, data) => {
              next();
            }
          );
    }
}


module.exports = {logReqRes};