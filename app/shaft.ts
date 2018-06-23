export class Shaft {    
    constructor(private stiffness: number) {
    }

    calculateShaftTorque(inputAngle: number) {
        let torque = this.stiffness * inputAngle;
        return torque;
    }
}
