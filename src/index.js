
function StringifyBrunch(config) {
    this.config = config;
    null;
}

StringifyBrunch.prototype.brunchPlugin = true;

StringifyBrunch.prototype.type = 'template';

StringifyBrunch.prototype.pattern = /\.(?:html|htm|json)$/;

StringifyBrunch.prototype.compile = function (data, path, callback) {
    var err, error, result;
    try {
        return result = (JSON.stringify(data));
    } catch (_error) {
        err = _error;
        return error = err;
    } finally {
        callback(error, result);
    }
};

module.exports = StringifyBrunch

