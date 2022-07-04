// 1. Swap The variables
//Problem One

// var numberOne = 55
// var numberTwo = 20


// var extra = numberOne
// numberOne = numberTwo
// numberTwo = extra

// console.log(numberOne, numberTwo);


// Find the max number between three int or number

// problem two
// const returnMaxNumber=(num1,num2,num3)=>{
//         if(num1>num2){
//             console.log('Number One Is Greater');
//         }else if(num2>num3){
//             console.log('Number Two Is Greater');
//         }else if(num1>num3){
//             console.log('Number One Is Greater');
//         }else{
//             console.log('Number Three Is Greater');
//         }
// }

// returnMaxNumber(15,10,2)


const returnMaxNumber=(num1,num2,num3)=>{
     maxnumber = 0

        if(num1>num2){
            maxnumber = num1
        }else{
            maxnumber = num2
        }

        if(num3>maxnumber){
            maxnumber = num3
        }

        return maxnumber;
}

console.log(returnMaxNumber(5,10,15));