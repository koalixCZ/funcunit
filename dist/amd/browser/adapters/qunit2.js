/*funcunit@3.3.0#browser/adapters/qunit2*/
define(function (require, exports, module) {
    var FuncUnit = require('../core');
    module.exports = function (QUnit) {
        var done;
        return {
            pauseTest: function () {
                done = FuncUnit.qunit2Assert.async();
            },
            resumeTest: function () {
                done();
            },
            assertOK: function (assertion, message) {
                FuncUnit.qunit2Assert.ok(assertion, message);
            },
            equiv: function (expected, actual) {
                return QUnit.equiv(expected, actual);
            }
        };
    };
});