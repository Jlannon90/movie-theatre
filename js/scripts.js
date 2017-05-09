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
  return this.movieTicket + " " + this.ticketTime;
}








// user interface logic

$(document).ready(function() {
  $("form#new-ticket").submit(function(event) { debugger;
  event.preventDefault();
    var movieChoice = $("input:radio[name=movie]:checked").val();
    var timeChoice = $("input:radio[name=time]:checked").val();
    var customerAge = $("input#age").val();

    var newTicket = new Ticket(movieChoice, timeChoice, customerAge);

    $("ul#tickets").append("<li>" + newTicket.generateTicket() + "</li>");
});



});
