function put(values){
    var inputs = document.getElementById("input");
     inputs.value += values;
}

function bracket(values){
    var inputs = document.getElementById("input");
    switch (values){
        case "bracket9":
            values = "(";
            break;
    
        case "bracket0":
            values = ")";
            break;
        }
            inputs.value += values;
        }


function square(values){
    var inputs = document.getElementById("input");
    switch(values){
        case "x2":
            inputs.value = Math.pow(inputs.value,2);
            break;
        case "x3":
            inputs.value = Math.pow(inputs.value,3);
            break;
    }
}


function root(){
    var inputs = document.getElementById("input");
    inputs.value = Math.sqrt(inputs.value);
}        



function allClear(){
    var inputs = document.getElementById("input");
    values = "";
    inputs.value = values;
}



function del(){
    var inputs = document.getElementById("input");
    inputs.value = inputs.value.slice(0,-1);
}


function equal(){
    var inputs = document.getElementById("input");
    try{
        inputs.value = eval(inputs.value);
    }
    catch{
        inputs.value = "Error";
    }
}







