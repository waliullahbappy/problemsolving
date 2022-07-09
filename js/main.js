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


// const returnMaxNumber=(num1,num2,num3)=>{
//      maxnumber = 0

//         if(num1>num2){
//             maxnumber = num1
//         }else{
//             maxnumber = num2
//         }

//         if(num3>maxnumber){
//             maxnumber = num3
//         }

//         return maxnumber;
// }

// console.log(returnMaxNumber(5,10,15));



// Find out sum of all number in an array
// Problem 3 


// var arr = [2,5,10,13,4,6,10,20,30]

// sum = 0

// for(let i=0; i<arr.length; i++){
//     sum += arr[i]
// }

// console.log(sum);




// Fibonacci series
// Problem 4

// function fiboSeries(num){
//     var fibonacci = [0,1]

//     if (typeof num != "number"){
//         return "Please Enter Number Type Value"
//     }
//     if (num<2){
//         return " Please Enter value greater than 2"
//     }
//     for(let i=2; i<num; i++){
//         // nth = (n-1)th + (n-2)th
//         fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
        
//     }
//     return fibonacci

// }

// console.log(fiboSeries(1));


// Find the laregest number in A Array

// let arr = [24,43,55,88,100]

// let highestNumber = arr[0]

// for(i=0; i<arr.length; i++){
//     if(arr[i]>highestNumber){
//         highestNumber = arr[i]
//     }
// }

// console.log(highestNumber)



// Find The Nearest Road in A Array


// const roads=[
//     {name:'Dhaka',distance:55},
//     {name:'Borishal',distance:25},
//     {name:'Cumilla',distance:65},
//     {name:'Feni',distance:15},
//     {name:'Patuakhali',distance:255},
// ]

// let nearestRoad = roads[0]

// for(const road of roads){
//    if(road.distance < nearestRoad.distance)
//     nearestRoad = road
// }

// console.log(nearestRoad);