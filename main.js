const ticket_default = 0.21;

const user_age = document.getElementById("age");
const user_distance = document.getElementById("distance");
const buttonEl = document.querySelector("button");



buttonEl.addEventListener("click", () => {
    const ageValue = user_age.value;
    const distanceValue = user_distance.value;
    console.log(checkPrice(ageValue, distanceValue));
})



function checkPrice(age, distance) {
    let ticket_price;
    
    if (age >= 65) {
        ticket_price = (ticket_default * distance - (ticket_default * distance * 0.4));
    
    }
    else if (age < 18) {
        ticket_price = (ticket_default * distance) - (ticket_default * distance * 0.2);
    }
    else {
        ticket_price = ticket_default * distance;
    }

    return ticket_price.toFixed(2)
}