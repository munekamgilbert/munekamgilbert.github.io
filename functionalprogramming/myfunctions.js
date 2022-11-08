
//Define a function sum() and a function multiply() that sums and multiplies (respectively)
    // all the numbers in an array of numbers
// function sum(arr){
    


function sum(array){
    return array.reduce((acc,b)=>acc+b);
}


//Define a function multiply() that sums and multiplies (respectively)
// all the numbers in an array of numbers
// function multiply(arr){
    
function multiply(array){
    return array.reduce((acc,x)=>acc*x);
}

/// Define a function reverse() that computes the reversal of a string.
// function reverse(str){

function reverse(str){
    let arr=str.split('');
    return arr.reduce((y,elem)=>elem+y);
   }
  // console.log(reverse("Gilbert"));

//Write a function filterLongWords() that takes an array of words and an integer 
//i and returns the array of words that are longer than i. */

function filterLongWords(arr,x){
    return arr.filter(a=>a.length>x);
}