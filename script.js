let div = document.getElementById("jeet");
let text = div.innerHTML;
let newText = "";

let words = text.split(" ");
for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
        newText += "<span>" + word[0] + "</span>";
        if (word.length > 1) {
            newText += word.slice(1);
        }
        if (i < words.length - 1) {
            newText += " ";
        }
    }
}

div.innerHTML = newText;

let spans = div.getElementsByTagName("span");

let blinkInterval = setInterval(function () {
    for (let i = 0; i < spans.length; i++) {
        spans[i].classList.toggle("blink");
    }
}, 3000);

for (let i = 0; i < spans.length; i++) {
    spans[i].addEventListener("animationend", function () {
        this.classList.remove("blink");
    });
}