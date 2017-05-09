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

Ticket.prototype.newTicket = function() {
  return this.movie + " " + this.time;
}








// user interface logic

$(document).ready(function() {
  $("form#new-ticket").submit(function(event) {
  event.preventDefault();




});



});
