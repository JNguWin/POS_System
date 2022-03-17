const completeBtn = document.getElementById("complete-transaction");
const display = document.getElementById("display");

completeBtn.addEventListener('click', function(){

    let size = document.getElementsByName("pizza");
    let toppings = document.getElementsByName("toppings");
    let transaction = document.getElementById("transaction");
    let nameText = document.getElementById("Name");
    let addressText = document.getElementById("Address");
    let cityStateText = document.getElementById("CityAndState");
    let zipText = document.getElementById("Zip");
    let phoneText = document.getElementById("Phone");
    let soda = document.getElementById("drink");
    let drinkSize = document.getElementById("drink-size");
    let transactionNumber = 0;
    
    
    transactionNumber++;

    display.innerText += "Customer: " + transactionNumber + "\n";

    display.innerText += "Pizza Size: ";
    
    for(let i = 0; i < size.length; i++){
        if(size[i].checked){
            display.innerText += " " + size[i].value + "\n";
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

    display.innerText += "Drink: " + soda.value;

    display.innerText += "\n";

    display.innerText += "Price: " + drinkSize.value + "\n";

    display.innerText += "\n";

    display.innerText += "Customer Information" + "\n";

    display.innerText += "\n";

    if(nameText.value == "" || addressText.value == "" || cityStateText.value == "" || zipText.value == "" || phoneText.value == ""){
        alert("Empty field. Fill out all fields.");
    }
    else if(nameText != "" && addressText != "" && cityStateText != "" && zipText != "" && phoneText!= ""){
        display.innerText += "Name: " + nameText.value + "\n";

        display.innerText += "Address: " + addressText.value + "\n";

        display.innerText += "City And State: " + cityStateText.value + "\n";

        display.innerText += "Zip: " + zipText.value + "\n";

        display.innerText += "Phone: " + phoneText.value + "\n";

    }

});