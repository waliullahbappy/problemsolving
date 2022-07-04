// 1. Swap The variables

// var numberOne = 55
// var numberTwo = 20


// var extra = numberOne
// numberOne = numberTwo
// numberTwo = extra

// console.log(numberOne, numberTwo);


// Find the max number between three int or number


const returnMaxNumber=(num1,num2,num3)=>{
        if(num1>num2){
            console.log('Number One Is Greater');
        }else if(num2>num3){
            console.log('Number Two Is Greater');
        }else if(num1>num3){
            console.log('Number One Is Greater');
        }else{
            console.log('Number Three Is Greater');
        }
}

returnMaxNumber(15,10,2)