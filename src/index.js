const sysPath = require('path');

module.exports = class StringifyBrunch{
    compile(data, path, callback){
        try{
            return callback(null,JSON.stringify(data))
        }catch(e){
            return callback(e,null);
        }
    }
}

StringifyBrunch.prototype.brunchPlugin = true;
StringifyBrunch.prototype.type = true;
StringifyBrunch.prototype.pattern = /\.(?:html|htm|json)$/;
StringifyBrunch.prototype.brunchPlugin = true;

