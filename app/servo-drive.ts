import { TestCondition } from "./test-condition";

export class ServoDrive {
    // values that can be set by external program.
    testInProcess: boolean = false;
    controllerInitialized: number = 0;
    private _currentTorque: number = 0;
    private _currentAngle: number = 0;
    watchdogValue: number = 100;
    ccwTorqueLimit: number = 20000;
    cwTorqueLimit: number = -20000;
    runSpeed: number = 1;
    manualSpeed: number = 1;
    diffLimit: number = 100;
    torqueDirection: number = 1;
    testType: number = 3;
    operatorEndsTest: number = 1;   

    set CurrentTorque(value: number) {
        this._currentTorque = value;
    }

    get CurrentAngle() {
        return this._currentAngle;
    }

    goToZero(degPerSecond: number) {

    }

    rotateClockwise(degPerSecond: number) {

    }

    rotateCounterClockwise(degPerSecond: number) {

    }
}