function myFunction()
{
    console.log("Why so serious?");
}
myFunction();

function summ(a,b)
{  
    return(a+b);
}

let z = summ(1,2);
console.log(z);

// method 2 of writing sum
const arrowSum = (a,b) =>
{
    console.log(a+b);
};


let nums =[1,2,3,4,5];

// sudy for each loop
// study map method 


for(let i =0; i < nums.length; i++)
{
    console.log(nums[i]);
}


function calcSquare(arr)
{
    let square_sum = 0;
    for(let i=0; i< arr.length ; i++)
    {
        square_sum += arr[i]**2;
    }
    return square_sum;
}


console.log(calcSquare([1,2,3]));
