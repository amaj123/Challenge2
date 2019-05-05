 var johnAverage, mikeAverage, maryAverage;
 
 maryAverage = (122 + 120 + 103) / 3;
 johnAverage = (122 + 120 + 103) / 3;
 mikeAverage = (122 + 120 + 103) / 3;



 if (johnAverage > mikeAverage && johnAverage > maryAverage) {
     console.log("Jhon's team has won with an average score of " + johnAverage + "." );
     
 } else if (mikeAverage > johnAverage && mikeAverage > maryAverage){
     console.log("Mike's team has won with an average score of " + mikeAverage + ".") ;

 } else if (maryAverage > johnAverage && maryAverage > mikeAverage){
        console.log("Mary's team won with an average score of " + maryAverage + ".");
    }
  else if (johnAverage === mikeAverage){
      console.log("John and Mike's team both drew, John's team had a score of " 
      + johnAverage + " and Mike's team had a score of " + mikeAverage + ".");
     }  
  else if (johnAverage === maryAverage){
    console.log("John and Marys's team both drew, John's team had a score of " 
    + johnAverage + " and Marys's team had a score of " + maryAverage + ".");
  }   
  else if (mikeAverage === maryAverage){
    console.log("Mike and Marys's team both drew, Mikes's team had a score of " 
    + mikeAverage + " and Marys's team had a score of " + maryAverage + ".");
  }
  else if (mikeAverage === johnAverage && mikeAverage === maryAverage && johnAverage
    === maryAverage){
     console.log("All teams drew, John's team had a score of " + johnAverage +
    " , Mike's team had a score of " + mikeAverage + " and Mary's team had a score of " + 
    maryAverage + "." );
 }
