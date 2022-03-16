const completeBtn = document.getElementById("complete-transaction");
const display = document.getElementById("display");

completeBtn.addEventListener('click', function(){

    let size = document.getElementsByName("pizza");
    let toppings = document.getElementsByName("toppings");

    display.innerText += "Pizza Size: " + " ";
    
    for(let i = 0; i < size.length; i++){
        if(size[i].checked){
            display.innerText += size[i].value + "\n";
        }
    }
    
    display.innerText += "\n";

    display.innerText += "Toppings: " + "\n";

    for(let i = 0; i < toppings.length; i++){
        if(toppings[i].checked){
            display.innerText += toppings[i].value + "\n";
        }
    }

});