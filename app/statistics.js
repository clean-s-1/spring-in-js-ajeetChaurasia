module.exports=function getStatistics(numbers){
    //implement the computation of statistics here
    if(!numbers.some(isNaN) && numbers.length > 0){
        let sortedNumbers = () => {
            return numbers.sort(function(a,b) { return a - b;});
        } 
        min = () => {
            return  sortedNumbers()[0];
        }
        max = () => {
            return  sortedNumbers()[numbers.length-1];
        }
        average = () => {
            return numbers.reduce(function(a,b) { return a+b ;})/numbers.length;
        }
        return {
        min : min(),
        max : max(),
        average: average()
        };
    }else {
        return {
        min : NaN,
        max : NaN,
        average: NaN
        };
    }
    
}

