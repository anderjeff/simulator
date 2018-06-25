import {logger} from './logger'
export class Shaft {    
    constructor(private stiffness: number) {
    }

    calculateShaftTorque(inputAngle: number) {
        logger.logMessage('info', 'calculating shaft torque');
        let torque = this.stiffness * inputAngle;
        return torque;
    }
}
