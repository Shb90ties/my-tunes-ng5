export interface Test {
    name: string,
    score: number
}

export class TestClass {
    private name: string;
    private score: number;

    constructor() {}

    public setName(name: string) {
        this.name = name;
    }

    public getName() {
        return this.name;
    }

    public setScore(score: number) {
        this.score = score;
    }

    public getScore() {
        return this.score;
    }
}