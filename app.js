var ul = document.querySelector("ul");

for (var i = 1; i <= 100; i++) {
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
