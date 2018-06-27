import {Utilities} from './utilities';

export class Shaft {    
    constructor(private stiffness: number) {
    }

    calculateShaftTorque(inputAngle: number) {
        Utilities.logger.info("Calculating shaft torque.");
        let torque = this.stiffness * inputAngle;
        return torque;
    }
}
