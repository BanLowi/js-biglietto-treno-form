const ticket_default = 0.21;

let user_age = document.getElementById("age");
let user_distance = document.getElementById("distance");
console.log(user_age);
console.log(user_distance);




function checkPrice(age, distance) {
    let ticket_price;
    
    if (age.value >= 65) {
        ticket_price = (ticket_default * distance.value) - (ticket_default * distance.value * 0.4);
    
    }
    else if (age.value < 18) {
        ticket_price = (ticket_default * distance.value) - (ticket_default * distance.value * 0.2);
    }
    else {
        ticket_price = ticket_default * distance.value;
    }

    return `Il tuo biglietto costa: ${ticket_price.toFixed(2)}`
}

console.log(checkPrice(user_age, user_distance));
