const readline=require('readline').createInterface({

    input: process.stdin,

    output: process.stdout,

});

getNumber();

let total=0;

function getNumber(){

    readline.question("Enter a number: ", answer=>{

        if(answer === 'stop'){

            console.log("The sum of all the numbers entered is: ",total);

            readline.close();

        }else{

            if(parseInt(answer))
            
                total += parseInt(answer);

            process.nextTick(getNumber);

        }
    })
}