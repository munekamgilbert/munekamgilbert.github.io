//Define a function max() that takes two numbers as arguments and returns the largest 
//of them. Use the if-then-else construct available in Javascript.

function max(a, b) {
	if (a>b) {
		return a;}
else if (a<b){
	
	return b;
}	
else {
			return "equals";
		}
	}

//test
//alert(max(2,3));

//Define a function maxOfThree() that takes three numbers as arguments 
//and returns the largest of them.

function maxOfThree (a,b,c) {

   if(a>b){
	 if (a>c) {
		return a;
	} else c;
}
	else if(b>c) {
		return b;
	}  else c;

}
//test
//alert(maxOfThree(45,23,67));

//Write a function isVowel() that takes a character (i.e. a string of length 1) and 
//returns true if it is a vowel, false otherwise.

function isVowel(char) {
	switch (char) {

		case 'a' : return true;
		case 'b' : return true;
		case 'c' : return true;
		case 'd' : return true;
		case 'e' : return true;
		
		default:

		return false;
	}
}

//test
//alert (isVowel(''));



//Define a function sum() and a function multiply() that sums and multiplies (respectively) 
//all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and 
//multiply([1,2,3,4]) should return 24

function sum(a){
    var sum=0;
    a.forEach(element=>{
        sum+=element;
    });
    multiply(a);
    return sum;
}


function multiply(nums){
	var total=1;
 for (var i = nums.length - 1; i >= 0; i--) {
 	total=total*nums[i];
 }
return total;

}

//test
//alert (multiply([1,2,3,4]));
//console.log(multiply([1,2,3,4]));

//Define a function reverse() that computes the reversal of a string. 
//For example, reverse("jag testar") should return the string "ratset gaj".

function reverse(str){
        // empty string
    let revString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revString += str[i];
    }
    return revString;
}

//	alert (reverse("jag testar"))


//Write a function findLongestWord() that takes an array of words and returns the 
//length of the longest one.




function findLongestWord(str) {
  //var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i].length > longestWord){
	longestWord = str[i].length;
     }
  }
  return longestWord;
}
//alert (findLongestWord(["The", "longestWord", "people"]));

//Write a function filterLongWords() that takes an array of words and an integer 
//i and returns the array of words that are longer than i.

function filterLongestWord(str,x){

	 //var strSplit = str.split(' ');
  return longestWord = str.filter(i=>i.length>x);
  
}
//alert (filterLongestWord(["The", "longestWord", "people"],6));


// Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:

// a) multiply each element by 10; 

// b) return array with all elements equal to 3; 

// c) return the product of all elements;

// ​After you finish, make sure all your functions are in ONE JS file .

function jsfiddle(a){
    const b = a.map(function(elem, i, array) {
        return elem * 10;
      })
      console.log(b);
      const c = a.filter(function(elem, i, array){
        return elem === 3;});
        console.log(c);
      const d = a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
      });
      console.log(d);
}
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else { 
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))); //max(a,b)
  console.log("Expected output of maxOfThree(20,10,30) is 30  " + myFunctionTest(30, maxOfThree(20,10,30))); //maxOfThree(a,b,c)
  console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a'))); //isVowel(a)
  console.log("Expected output of sum([1,2,3,4,5]) is 15" + myFunctionTest(15, sum([1,2,3,4,5]))); //sum(a)
  console.log("Expected output of reverse(jag testar) is ratset gaj  " + myFunctionTest("ratset gaj", reverse("jag testar"))); //reverse(str)
  console.log("Expected output of findLongestWord([The, longestWord, people]) is 11 " + myFunctionTest(11, findLongestWord(["The", "longestWord", "people"]))); //findLongestWord(str)
  console.log("Expected output of filterLongWords([The, longestWord, people]) is ['The', 'longestWord', 'people']  " + myFunctionTest(["The", "longestWord", "people"], filterLongWords(["The", "longestWord", "people"],6))); //filterLongWords(str , val)
  console.log("Expected output of jsfiddle([1,2,3,4,5,6]) is [10, 20, 30, 40, 50, 60]  " + myFunctionTest(720, jsfiddle([1,2,3,4,5,6]))); //jsfiddle(a)
  

