"use strict";
exports.__esModule = true;
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(name, code) {
        this.name = name;
        this.code = code;
    }
    Patient.prototype.getName = function () {
        return this.name;
    };
    ;
    Patient.prototype.getCode = function () {
        return this.code;
    };
    Patient.prototype.setName = function (name) {
        this.name = name;
    };
    Patient.prototype.setCode = function (code) {
        this.code = code;
    };
    return Patient;
}());
exports.Patient = Patient;
