/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/

/*MAKE SURE TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/*
Task 1a - Voting Age

Do the following:   
   1. Make a variable called votingAge and give it a value
   2. Return true if age is 18 or higher

   HINT: no function required
*/
let votingAge = 17;
if (votingAge >= 18) {
  console.log(true);
}


/*
Task 1b - Values

Do the following:   
   1. Declare two variables and assign them values
   2. Use a conditional to change the value of the 1st variable based on the value assigned to the 2nd variable
   3. Return the new value of the 1st variable

   HINT: no function required
*/
let x = 34;
const y = 200;
if (y>x){
  x=x+y;
}
console.log(x);





/*
Task 1c - Convert Strings to Numbers

Do the following:   
   1. Declare a string type variable with the value of "1999"
   2. Convert the string value of "1999" to a integer value of 1999
   3. Return the result

   HINT: look up the Number method
*/
let x = "1999"
let y = Number(x);
console.log(y);


/*
Task 1d - Multiply
 
Do the following:   
   1. Invoke the multiply function below and pass it two numbers
   2. Receive the numbers in the parameters: a and b
   3. Multiply a and b and return the answer
*/

function multiply(x,y){
    /*add your code here*/
    return(x*y);
  }
multiply(2,4)


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Age in Dog years
/*
Do the following:
   1. Invoke the dogYears function below and pass an age value to it
   2. Use the received value to calculate the age in dog years (1 human year is equal to 7 dog years)
   3. Return the newly calculated age
*/

function dogYears(age){
    /*add your code here*/
    return(age*7);
}
dogYears(10)


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Dog feeder - Depending on their weight and age, we need to know how many pounds of food to feed our dog each day!
/*
Use the hungryDog function and feeding requirements below to do the following:
  1. Invoke the hungryDog function below and pass it a weight value in pounds
  2. Also, pass to hungryDog an age value in years (note: if the dog is a puppy, the age will be a decimal. For example: three months = 3/12 or .25)
  3. Do the proper calculations and return the number of pounds of raw food to feed the dog/puppy in a day
  
  REMEMBER: This program should handle correctly adult AND puppy ages and weights
  
  Feeding Requirements:

  ADult Dogs 1 year and older 
     up to 5 lbs - 5% of their body weight
     6 - 10 lbs - 4% of their body weight 
     11 - 15 lbs - 3% of their body weight 
     > 15lbs - 2% of their body weight 

  Puupies less than 1 year
     2 - 4 months 10% of their body weight
     4 - 7 months 5% of their body weight 
     7 - 12 months 4% of their body weight
    
  NOTE: If done correctly, a weight of 15 lbs and age of 1 year would return 0.44999999999999996
*/  

function hungryDog(lbs, age){
    /*add your code here*/
    if(age>=1){
      if(lbs<5){
        return(lbs*.05);
      } else if(lbs>5 && lbs<=10){
        return(lbs*.04);
      }else if(lbs>10 && lbs<=15){
        return(lbs*.03);
      }else if (lbs>15){
        return(lbs*.02)
      }
    }
    if(age<1){
      if(age<0.3333333333333333){
        return(lbs*.10);
      } else if(age>0.3333333333333333 && age<=0.58333333333){
        return(lbs*.04);
      }else if(age>0.58333333333 && age<1){
        return(lbs*.04);
      }
    }
  }
hungryDog(15, 1)


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Rock, Paper, Scissors - Let's play against the computer!
/*
Use the game function below to do the following:
  1. Receive a string that represents the user's choice (either "rock", "paper", or "scissors")
  2. Use Math.random to determine the computers choice (Math.random gives a random number between 0 and 1)
  3. Return whether the user won, lost, or tied based on these rules of the game described below
  
  RULES OF THE GAME: Scissors beats Paper | Paper beats Rock | Rock beats Scissors | Or there's a tie
  
  HINT: While you can complete this with only conditionals based on strings, it may help to equate choice to a number when using Math.random()
*/

function game(userchoice){
  /*add your code here*/
  if(userchoice === "rock" || userchoice ==="Rock"){
    userchoice=1;
  }else if (userchoice === "paper" || userchoice ==="Paper"){
    userchoice=2;
  }else if(userchoice === "scissors" || userchoice ==="Scissors"){
    userchoice=3;
  }else{
    console.log("Invalid Input")
  }
  let compchoice = Math.round(Math.random()*3);
  if (userchoice === compchoice){
    return("It's a tie!");
  }else if (userchoice === 1 && compchoice === 3 || userchoice === 2 && compchoice === 1 || userchoice === 3 && compchoice === 2){
    return("You win");
  }else if (compchoice === 1 && userchoice === 3 || compchoice === 2 && userchoice ===1 || compchoice === 3 && userchoice === 2){
    return("You lose");
  };
}
  
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Metric Converter 
//Task 5a - KM to Miles 
/*
Using the miles function below do the following:
  1. Receive a number of kilometers
  2. Convert the number of kiolmeters received to miles
  3. Return the number of miles
*/

function miles(kilometers){
    /*add your code here*/
    return(kilometers*0.621371);
  }



//Task 5b - Feet to CM
/*
Using the feet function below do the following:
  1. Receive a number of feet
  2. Convert the number of feet to centimeters
  3. Return number of centimeters
*/

function feet(feet){
    /*add your code here*/
    return(feet*30.48);
  }
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

// Let's Sing 99 Bottles of Soda on the Wall!
/*
Using the annoyingSong function below do the following:
  1. Receive a starting number and start to count down from the number received 
  2. At each iteration, it should return this string: 
      "(number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall"
*/

function annoyingSong(bottles){
  /*add your code here*/
  let x = bottles;
  while(x>0){
  console.log(x + " bottles of soda on the wall, " + x + " bottles of soda, take one down pass it around " + (x-1) + " bottles of soda on the wall!");
  x--;
  }
}


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/

//Grade Calculator
/*
Using the grade function below do the following: 
  1. Receive a score out of 100 
  2. Return the corresponding letter grade following this grade scale:

   90-100 = A 
   80-89 = B 
   70-79 = C 
   60-69 =  D 
   below 60 = F
*/
  
function grade(score){
  /*add your code here*/
  let x = score;
  if(x<100 && x>=90){
    return("You got an A");
  }else if(x<90 && x>=80){
    return("You got a B");
  }else if(x<80 && x>=70){
    return("You got a C");
  }else if(x<70 && x>=60){
    return("You got a D")
  }else if(x<60){
    return("Oh No! You got an F!");
  }else if(x>100 || x<0){
    return("Invalid input - score must be between 0 and 100")
  }
}
  
  
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/

//Vowel Counter - How many vowels are there?
/*
Using the vowelCounter function below do the following:
  1. Receive a string as a parameter
  2. Count and return the number of vowels within that string.  It should handle both capitalized and uncapitalized vowels.

  HINT - you may need to study tomorrow's content on arrays 
  HINT - try looking up the .includes() method
*/


function vowelCounter(str){
  let vowels = ["a","e","i","o","u"];
  let input = str.toLowerCase();
  let vcount=0;
  for(i=0; i<vowels.length; i++){
    if(vowels.includes(input[i])){
      vcount++;
    };
  };
  return(vcount);
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade
}
