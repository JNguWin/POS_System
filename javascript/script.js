const completeBtn = document.getElementById("complete-transaction");
const display = document.getElementById("display");

completeBtn.addEventListener('click', function(){

    let size = document.getElementsByName("pizza");
    let toppings = document.getElementsByName("toppings");
    let transaction = document.getElementById("transaction");

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

    display.innerText += "\n";

    display.innerText += "Drink: ";

    display.innerText += "\n";

    display.innerText += "Price: ";

    display.innerText += "\n";

    display.innerText += "Customer Information";

    display.innerText += "\n";

    display.innerText += "Name: ";

    display.innerText += "\n";

    display.innerText += "Address: ";

    display.innerText += "\n";

    display.innerText += "City And State: ";

    display.innerText += "\n";

    display.innerText += "Zip: ";

    display.innerText += "\n";

    display.innerText += "Phone: ";

});