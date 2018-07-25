export class Plan {
    planId: number; 
    planName: string; 
    planType: string;

    constructor(planId: number, planName: string, planType: string){
        this.planId = planId;
        this.planName = planName;
        this.planType = planType;
    }
}
