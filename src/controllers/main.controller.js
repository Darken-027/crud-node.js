const path = require("path")

const index = (req, res) => {
    //console.log(__dirname);
    res.sendFile(path.resolve(__dirname, "../../private/index.htm"));
};

module.exports = {
    index,
}