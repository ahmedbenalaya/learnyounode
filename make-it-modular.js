const filterFn = require('./solution_filter.js');
let dir = process.argv[2];
let filterStr = process.argv[3];
 
filterFn(dir, filterStr, function (err, list) {
    if (err) {
        return console.error('There was an error:', err);
    }
 
    list.forEach(function (file) {
        console.log(file)
    });
});
 
// solution_filter.js
const fs = require('fs');
const path = require('path');
 
module.exports = function (dir, filterStr, callback) {
 
    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }
 
        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr
        });
 
        callback(null, list)
    })
}