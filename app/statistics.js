module.exports=function getStatistics(numbers){
    
    //implement the computation of statistics here
    
    let sortedNumbers = () => {
        return numbers.sort(function(a,b) { return a - b;});
    } 
    min = () => {
        return  sortedNumbers()[0]
    }
    max = () => {
        return  sortedNumbers()[numbers.length-1];
    }
    average = () => {
        return numbers.reduce(function(a,b) { return a+b ;})/numbers.length;
    }
}

