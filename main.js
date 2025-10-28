const ticket_default = 0.21;

const user_age = document.getElementById("age");
const user_distance = document.getElementById("distance");
const buttonEl = document.querySelector("button");
const formEl = document.querySelector("form");
const rowEl = document.querySelector(".row");

const ticketDisplay = document.createElement("div");
ticketDisplay.className = "col-12"
rowEl.append(ticketDisplay);


// Al click di "INVIA" salvo i dati di input e stampo il risultato di checkPrice con i dati
formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const ageValue = user_age.value;
    const distanceValue = user_distance.value;
    const result = checkPrice(ageValue, distanceValue);

    ticketDisplay.innerHTML = `
    
            <div class="card col-3 text-center p-2">
                
                <div class="card-header bg-transparent mb-2">
                    <h4>IL TUO BIGLIETTO</h4>
                </div>

                <div class="card-body bg-transparent mb-2">
                    <h4>${result}</h4>
                </div>

            </div>

    
    `
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