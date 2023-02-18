"use strict";

const newman = require("newman");
const moment = require("moment-timezone");

module.exports = (function () {
    let self = {};

    self.run = function () {
        console.log("running task 1");
        let date_time = moment()
            .tz("Asia/Ho_Chi_Minh")
            .format("DD-mm-YYYY_HH-mm-ss");
        let fileName = `report-${date_time}`;

        newman.run(
            {
                collection: require("../collections/Schedule1.postman_collection.json"),
                //environment: require("../env/Development.postman_environment.json"),
                reporters: ["cli", "htmlextra"],
                reporter: {
                    htmlextra: {
                        export: `./report/${fileName}.html`
                    }
                }
            },
            (err, summary) => {
                if (err) throw err;
                console.log(summary.run.failures);
            }
        );

        return true;
    };

    return self;
})();
