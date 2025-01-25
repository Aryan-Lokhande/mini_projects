var display = document.getElementById('screen');

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(d){
    if(d == 'AC'){
        display.value = "";
    }else { 
        let innerText = display.value;
        display.value = innerText.slice(0, -1);   
    } 
}

function claculate(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error"
    }
}

function square() {
    let x =display.value;
    try{
        display.value= x * x;
    }catch(error){
        display.value = "Error , remove operator form values"
    }

}

// const y => () {};