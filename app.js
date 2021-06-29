/*var ul = document.querySelector("ul");

for (var i = 1; i <= 50; i++) {
    var message = "";
    var li = document.createElement("li");
    if (i % 3 === 0) {
        message += "fizz";
    }
    if (i % 5 === 0) {
        message += "buzz";
    }
    if (message === "") {
        li.innerText = i;
    } else {
        li.innerText = message;
    }
    ul.appendChild(li);
}

setTimeout(function () { ul.remove(); }, 10000);
*/

var ul = document.querySelector("ul");
var counter = 1;

var fizzBuzz = setInterval(function () {
    var message = "";
    var li = document.createElement("li");

    if (counter % 3 === 0) {
        message += "fizz";
    }
    if (counter % 5 === 0) {
        message += "buzz";
    }
    if (message === "") {
        li.innerText = counter;
    } else {
        li.innerText = message;
    }
    ul.appendChild(li);

    counter += 1;

    if (counter === 50) clearInterval(fizzBuzz);

}, 500);

