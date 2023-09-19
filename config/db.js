const mongoose = require('mongoose')
const MONGODBURI = "mongodb://127.0.0.1:27017/aktimernProj";
const connectToMongodb = () => {
    mongoose.connect(MONGODBURI)
    .then (() => {
        console.log(`Connected to MongoDb at ${MONGODBURI}`);
    })

    .catch((error) => {
        console.error(
            `Error Connecting to MongoDB at ${MONGODBURI}:`,
            error
        )
    })
};
module.exports = connectToMongodb;