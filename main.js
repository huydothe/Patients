"use strict";
exports.__esModule = true;
var hospital_1 = require("./hospital");
var Patient_1 = require("./Patient");
var storage = new hospital_1.Hospital();
var listPatient = [];
function checkMin() {
    while (listPatient.length > 0) {
        var min = listPatient[0].code;
        for (var i = 0; i < listPatient.length; i++) {
            if (listPatient[i].code < min) {
                min = listPatient[i].code;
            }
        }
        for (var i = 0; i < listPatient.length; i++) {
            if (min == listPatient[i].code) {
                storage.enQueue(listPatient[i]);
                listPatient.splice(i, 1);
            }
        }
    }
}
var Smith = new Patient_1.Patient("Smith", 5);
var Fehrenbach = new Patient_1.Patient("Fehrenbach", 6);
var Brown = new Patient_1.Patient("Brown", 1);
var Jones = new Patient_1.Patient("Jones", 4);
var Ingram = new Patient_1.Patient("Ingram", 1);
var Eddi = new Patient_1.Patient("Eddi", 10);
listPatient.push(Smith);
listPatient.push(Fehrenbach);
listPatient.push(Brown);
listPatient.push(Jones);
listPatient.push(Ingram);
listPatient.push(Eddi);
checkMin();
console.log(storage.getlistPatient());
