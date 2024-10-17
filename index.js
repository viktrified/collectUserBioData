prompt("What's your name?");
let club = prompt("What's your favorite football club?");
prompt("What's your email?");
let age = prompt("How old are you?");

if (age > 18) {
  document.getElementById("h1").innerHTML = `Welcome to Cloud9 viewing center!`;
  document.getElementById(
    "p1"
  ).innerHTML = `Thank you using Cloud9. we're rooting for ${club} to win1`;
} else {
  alert("wait till you're 18");
}
