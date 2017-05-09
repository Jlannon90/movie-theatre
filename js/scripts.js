// business logic
function Theater(movies, tickets, times, concessions) {
  this.movieList = movies;
  this.ticket = tickets;
  this.timeList = times;
  this.foods = concessions;
}

function Ticket(movie, time, age) {
  this.movieTicket = movie;
  this.ticketTime = time;
  this.ticketAge = age;
}

Ticket.prototype.generateTicket = function() {
  return this.movieTicket + " at " + this.ticketTime;
}


Ticket.prototype.ticketOutput = function() {
  var ticketPrice = 12;

  if (this.ticketAge >= 65) {
     ticketPrice -= 2;
    }
  if ((this.ticketTime === "1:15 PM") || (this.ticketTime === "2:30 PM") || (this.ticketTime === "3:00 PM")) {
    ticketPrice -= 1;
    }
  if ((this.movieTicket !== "Raiders of the Lost Gondola") || (this.movieTicket !== "Gasp!")) {
    ticketPrice += 3;
    }

return ticketPrice;
};



// user interface logic

$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
  event.preventDefault();
    var movieChoice = $("input:radio[name=movie]:checked").val();
    var timeChoice = $("input:radio[name=time]:checked").val();
    var customerAge = parseInt($("input#age").val());

    var newTicket = new Ticket(movieChoice, timeChoice, customerAge);

    $("ul#tickets").append("<li><h3 style='font-weight:500;'>" + newTicket.generateTicket() + "</br>" + " $" + newTicket.ticketOutput() + "</h3></li>");
    $(".corndog").show();
});



});
