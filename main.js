const ticket_default = 0.21;

const user_age = document.getElementById("age");
const user_distance = document.getElementById("distance");
const buttonEl = document.querySelector("button");


// Al click di "INVIA" salvo i dati di input e stampo il risultato di checkPrice con i dati 
buttonEl.addEventListener("submit", () => {
    event.preventDefault();
    const ageValue = user_age.value;
    const distanceValue = user_distance.value;
    console.log(checkPrice(ageValue, distanceValue));
    console.log(ageValue);
})


// Verifico l'età e applico uno sconto in base a essa
function checkPrice(age, distance) {
    let ticket_price;
    
    if (age === "Anziano") {
        ticket_price = (ticket_default * distance - (ticket_default * distance * 0.4));
    
    }
    else if (age === "Minorenne") {
        ticket_price = (ticket_default * distance) - (ticket_default * distance * 0.2);
    }
    else {
        ticket_price = ticket_default * distance;
    }

    return ticket_price.toFixed(2)
}