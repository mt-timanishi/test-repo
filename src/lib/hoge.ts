export interface Hoge {
    name: string;
    age: number;
}

export class Moge implements Hoge{
    name;
    age;

    constructor() {
        this.name = 'moge';
        this.age = 1;
    }

    test() {
        console.log(`${this.name} ${this.age}`);
    }
}

const moge = new Moge();
moge.test();
