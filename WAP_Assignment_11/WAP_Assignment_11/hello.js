const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });
   readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    readline.question("What is your age? ", age => {
        if(age < 16)
            console.log(name +" "+ "You are not allowed to drive in Iowa.");
        else
            console.log(name +" "+"You are allowed to get drivers license in Iowa.");

            getNumber();
            let total=0;
            function getNumber(){
         
                readline.question("Enter a number: ", input=>{
    
                 if(input === 'stop'){
                        console.log("The sum of all the number is: ",total);
                        readline.close();
                    }else{
                        if(parseInt(input))

                            total += parseInt(input);
                            
                        process.nextTick(getNumber);
                    }
                })         
            }
    })
});
  


