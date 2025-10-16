const ticket_default = 0.21;

const user_age = document.getElementById("age");
const user_distance = document.getElementById("distance");
const buttonEl = document.querySelector("button");
const formEl = document.querySelector("form");
const rowEl = document.querySelector("row");

const resultDisplay = document.createElement(`
                <div class="card col-3 text-center">
                
                <div class="card-header bg-transparent mb-2">
                    <h4>Compra un biglietto!</h4>
                </div>
                <form>
                <select id="age" class="form-select mb-2">
                    <option value="Maggiorenne">Maggiorenne</option>
                    <option value="Minorenne">Minorenne</option>
                    <option value="Anziano">Anziano</option>
                </select>
                <input type="text" id="distance" placeholder="Inserisci distanza" class="form-control mb-2">
                <button class="btn btn-sm btn-primary" type="submit">INVIA</button>
                </form>
                </div>
            `);
rowEl.append(resultDisplay);


// Al click di "INVIA" salvo i dati di input e stampo il risultato di checkPrice con i dati
formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const ageValue = user_age.value;
    const distanceValue = user_distance.value;
    const result = checkPrice(ageValue, distanceValue);

    resultDisplay.textContent = `Prezzo del biglietto: ${result}`
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