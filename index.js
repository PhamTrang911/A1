function LinearEquation(a, b){
    if( a == 0){
        if(b == 0){
            return('many roots');
        }else{
            return('no root');
        }
    }else{
        let x = -b/a;
        return('one root: ' + x);
    }
}


function QuadraticEquation(a,b,c){
    if(a == 0){
        return LinearEquation(b, c);
    }else{
        const v = b*b - 4*a*c;
        if(v < 0){
            return ('no root');
        }else if(v == 0){
            return ('root: ' + -b/2*a);
        }else {
            return('X1 = ' + (-b + Math.sqrt(v))/ 2 * a + '  and  X2 = ' + (-b - Math.sqrt(v)) /2 *a );
            
        }
    }
}

//handle event
function onButtonClick(){
//get input a
const inputA = document.querySelector('#a');
const inputB = document.querySelector('#b');
const inputC = document.querySelector('#c');
//get value from input a
const a = inputA.value;
const b = inputB.value;
const c = inputC.value;

const result = QuadraticEquation(a,b,c);

//show result
const resultView = document.querySelector('#result');
resultView.textContent = result;
}
// get button
const button = document.querySelector('button');

// listen for event: click
button.addEventListener('click', onButtonClick);









