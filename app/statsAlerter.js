module.exports = class StatsAlerter {

    constructor(maxThreshold, alerters ) {
        this.threshold = maxThreshold;
        [this.emailAlert, this.ledAlert] =  alerters;
    }

   checkAndAlert(numbers) {
        let isMaxThreshold = numbers.some(e => e > this.threshold);
        if(isMaxThreshold){
            this.emailAlert.emailSent = true;
            this.ledAlert.ledGlows =  true;
        }
   };
   
}