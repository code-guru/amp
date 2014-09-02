var objKeys = require('keys');


module.exports = function values(obj) {
    var keys = objKeys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
};
