// Grouping together the same kind of files/ modules and making a single module which helps in import and export of modules (FOLDER STRUCTURE)
 
const {calculateMultiply} = require("./multiply");

const {calculateSum} = require("./sum");

module.exports = { calculateMultiply, calculateSum};