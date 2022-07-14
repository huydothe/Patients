
export class Hospital {
    container=[];

    constructor() {
    }

    getlistPatient=()=>this.container;

    enQueue(patient){
         return this.getlistPatient().push(patient);
    }
}