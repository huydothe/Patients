import {Hospital} from "./hospital";
import {Patient} from "./Patient";

let storage = new Hospital();
let listPatient=[];

function checkMin(){
    while (listPatient.length>0) {
        let min = listPatient[0].code;
        for (let i = 0; i < listPatient.length; i++) {
            if (listPatient[i].code < min) {
                min = listPatient[i].code;
            }
        }
        for (let i = 0; i < listPatient.length; i++) {
            if (min == listPatient[i].code) {
                storage.enQueue(listPatient[i]);
                listPatient.splice(i, 1);
            }
        }
    }
}

let Smith=new Patient("Smith",5);
let Fehrenbach=new Patient("Fehrenbach",6);
let Brown=new Patient("Brown",1);
let Jones=new Patient("Jones",4);
let Ingram=new Patient("Ingram",1);
let Eddi=new Patient("Eddi",10);

listPatient.push(Smith);
listPatient.push(Fehrenbach);
listPatient.push(Brown);
listPatient.push(Jones);
listPatient.push(Ingram);
listPatient.push(Eddi);

checkMin();
console.log(storage.getlistPatient());

