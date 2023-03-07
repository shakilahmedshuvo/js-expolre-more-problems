/*
1. if ticket price is less than 100, per ticket price:100;
2.if ticket price is more than 100,but less than 200.First 100 tickets will be 100/tickets rest ticketswill be 90 taka per piece
3.if you purchase more than 200 tickets 
    
    i.First 100 ---> 100taka;
    ii.101-200 --->90taka;
    iii.200+ --->70taka;
*/


// create function......

function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100Price = 100 * first100Rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100Price + second100Price + restTicketPrice;
        return totalCost;
    }
}

// call the function.........
const price = ticketPrice(250);
console.log("Ticket price:", price);