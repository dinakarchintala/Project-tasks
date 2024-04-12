const prompt = require('prompt-sync')();

const getUserChoice = () => {
   let a = prompt('Enter your choice:');
   a=a.toLowerCase();
   if(a=='rock'||a=='paper'|| a== 'scissors'||'bomb')
   {
       return a;
   }
   else
   {
       console.log("error");
   }
    
};
const getcomputerChoice = () =>{
    let b= Math.floor(Math.random() * 3);
    if(b==0)
    {
        
        return 'rock';
    }
    if(b==1)
    {
        
        return 'paper';
    }
    if(b==2)
    {
       
        return 'scissors';
    }
};

function determineWinner(userInput,computer)
{
    if(userInput=='bomb')
    {
        return 'user won';
    }
    if(userInput==computer)
    {
        
        return 'game is tie';
    }
    if(userInput=='rock')
    {
        if(computer=='paper')
        {
            return 'computer won';
        }
        else if(computer=='scissors')
        {
            return 'user won';
        }

    }
    if(userInput=='paper')
    {
        if(computer=='scissors')
        {
            return 'computer won';
        }
        else if(computer=='rock')
        {
            return 'user won';
        }

    }
    if(userInput=='scissors')
    {
        if(computer=='rock')
        {
            return 'computer won';
        }
        else if(computer=='paper')
        {
            return 'user won';
        }

    }

};
function Playgames(){
const userInput = getUserChoice();
console.log('User choice:', userInput);
const computer=getcomputerChoice();
console.log('computer :', computer);
const winner =determineWinner(userInput,computer);
console.log('the ',winner);
};
Playgames();

