let age=Math.floor(Math.random()*36);
console.log(`${age}`);
let registime=Math.floor(Math.random()*2);
let raceNumber=0;
console.log(`${registime}`);
if(age>18&&registime==1) //1=late,0=early
{
 raceNumber = Math.floor(Math.random() * 1000);
    console.log(`${raceNumber}`);
}
else if(age>18&&registime==0)
{
     raceNumber = Math.floor((Math.random() * 500)+1000);
    console.log(`${raceNumber}`);
}
if(age>18&&registime==0)
{
    console.log(`Race for ${raceNumber} will start at 9:30 am  `);
}
else if(age>18&&registime==1)
{
    console.log(`late adults  ${raceNumber} run at 11:00am `);
}

else if(age<18)
{
    console.log(`Race will begin at 12:30pm for ${raceNumber}`);
}
else 
{
    console.log('check the registration desk');
}

