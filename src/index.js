
function StringifyBrunch({wrapper='commonjs'}={}) {
    switch(wrapper){
        case 'commonjs' : this.moduleExport = (data) => `module.exports = ${data}`; break;
        case 'amd' : this.moduleExport = (data) => `return ${data}`; break;
        default : (data) => data; break;
    }
}

StringifyBrunch.prototype.brunchPlugin = true;

StringifyBrunch.prototype.type = 'template';

StringifyBrunch.prototype.pattern = /\.(?:html|htm|json|svg)$/;

StringifyBrunch.prototype.compile = function (data, path, callback) {
    var err, error, result;
    try {
        return result = this.moduleExport(path.endsWith('.json')?data:JSON.stringify(data));
    } catch (_error) {
        err = _error;
        return error = err;
    } finally {
        callback(error, result);
    }
};

module.exports = StringifyBrunch
