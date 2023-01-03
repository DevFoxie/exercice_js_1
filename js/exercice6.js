let thirdNumberInput = document.getElementById("thirdNumber");
let fourthNumberInput = document.getElementById("fourthNumber");
let submit2Button = document.getElementById("submit2");

submit2Button.addEventListener("click", function(event) {
    event.preventDefault();

    let num3 = thirdNumberInput.value;
    let num4 = fourthNumberInput.value;

    num3 = parseFloat(num3);
    num4 = parseFloat(num4);

    let reste = num3 % num4;
alert(`Le reste de la division est : ` + reste);
});

