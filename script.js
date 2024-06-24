function addition(x,y){
    return x + y;

}

        /*var result=addition(5,7);
          console.log(result)*/

function subtraction(x,y){
    return x - y;

}

           /*var result = subtraction(5,7);
                console.log(result);*/

function multiplication (x,y){
    return x * y;

}

       /*var result = multiplication(5,7);
              console.log(result)*/

function division(x,y){
    return x/y;

}


let x;
let y;
let operator = ['add', 'subtract', 'multiply','divide'];

function operate(x,y,operator){
    return operator(x,y);
}
    /*console.log(operate(5,7,division));*/


   