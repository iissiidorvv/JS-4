function fibonacciArray(n) {
    var fibArr = [0, 1];
    if (n===0) {
        fibArr = [0]
    }else if(n==1){
        fibArr = [0,1]
    }else{
        for (let i = 2; i < n; i++) {
            fibArr[i]=fibArr[i-2]+fibArr[i-1]
        }
    }
    return fibArr;
}
var result = fibonacciArray(11);
console.log(result); 