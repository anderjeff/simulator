import { TestCondition } from "./test-condition";

export class ServoDrive {
    // values that can be set by external program.
    testInProcess: boolean = false;
    controllerInitialized: number = 0;
    currentTorque: number = 0;
    watchdogValue: number = 100;
    ccwTorqueLimit: number = 20000;
    cwTorqueLimit: number = -20000;
    runSpeed: number = 1;
    manualSpeed: number = 1;
    diffLimit: number = 100;
    torqueDirection: number = 1;
    testType: number = 3;
    operatorEndsTest: number = 1;

    runTest(testCondition: TestCondition) {
        while(!testCondition.isComplete) {

            // do all the stuff we need to to do run a single cycle..

            // add one cycle.
            testCondition.cycleCount += 1;
        }
    }

    updateTestParameters() {
        // pause the test to update the parameters.
        if(this.testInProcess) {
            this.testInProcess = false;

            // do what you need




            // resume
            this.testInProcess = true;
        }    
    }
}