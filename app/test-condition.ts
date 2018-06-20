export class TestCondition {
    cycleCount: number;

    constructor(cwTorque: number, ccwTorque: number, numCycles: number) {
        this.cycleCount = 0;
    }

    get cwTorque(): number {
        return this.cwTorque;
    }
    get ccwTorque(): number {
        return this.ccwTorque;
    }
    get numCycles(): number {
        return this.numCycles;
    }

    isComplete(): boolean {
        return this.cycleCount >= this.numCycles;
    }
    
}