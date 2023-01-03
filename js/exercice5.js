let firstNumber ="Saisissez un premier nombre à virgule"
let secondNumber ="Puis un deuxième"

alert(firstNumber + "\n" + secondNumber);

let firstNumberInput = document.getElementById("firstNumber");
let secondNumberInput = document.getElementById("secondNumber");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    let num1 = firstNumberInput.value;
    let num2 = secondNumberInput.value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    num1 = Math.trunc(num1);

    let result = num1 * num2;
alert(`Le résultat de la multiplication est : ` + result);
});