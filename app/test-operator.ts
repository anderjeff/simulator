import { FatigueTest } from "./fatigue-test";
import { ServoDrive } from "./servo-drive";


export class TestOperator {

    constructor(private test: FatigueTest, private servoDrive: ServoDrive) {
    }

    beginTest() {
        if(this.test.conditions.length > 0) {
            this.servoDrive.goToZero(1);

            

        }


        
    }

    alertNewTorqueValue(torque: number) {

    }

    
}