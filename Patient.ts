export class Patient {
    name:string;
    code:number;

    constructor(name: string, code: number) {
        this.name = name;
        this.code = code;
    }
    public getName() {
        return this.name
    };
    public getCode(){
        return this.code;
    }

    public setName(name:string){
        this.name=name;
    }
    public setCode(code:number){
        this.code=code;
    }
}