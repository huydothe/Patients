"use strict";
exports.__esModule = true;
exports.Hospital = void 0;
var Hospital = /** @class */ (function () {
    function Hospital() {
        var _this = this;
        this.container = [];
        this.getlistPatient = function () { return _this.container; };
    }
    Hospital.prototype.enQueue = function (patient) {
        return this.getlistPatient().push(patient);
    };
    return Hospital;
}());
exports.Hospital = Hospital;
