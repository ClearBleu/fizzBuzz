var fizzBuzz =[];

function fizzBuzzFunc(){
    for (i = 1; i < 101; i++){
     
        fizzBuzz.push(i)
       
        if (i % 5 == 0 && i !=0){
         
             fizzBuzz.pop();  
             fizzBuzz.push("fizz");
}
        if  (i % 7 == 0 && i != 0){
             fizzBuzz.pop();  
             fizzBuzz.push("buzz");
       
}
        if (i % 5 == 0 && i % 7 == 0 && i != 0) {
             fizzBuzz.pop();  
             fizzBuzz.push("fizzbuzz");
}
   
    console.log(fizzBuzz)
}
}
fizzBuzzFunc()