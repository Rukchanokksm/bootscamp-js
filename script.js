

const score = grade => {

    if (grade >= 80 && grade <= 100){
        console.log("You got A");
    }else if (grade >= 70 && grade <=79){
        console.log("You got B");
    }else if (grade >= 60 && grade <= 69){
        console.log("You got C")
    }else if (grade >= 50 && grade <= 59){
        console.log("You got D")
    }else if (grade >= 101 ){
        console.log("Grade > 100");
    }else if (grade < 0 ){
        console.log("Grade < 0");
    }
    else  {      
        console.log("You got F");
    }
 
}
score(Math.floor(101.2));


