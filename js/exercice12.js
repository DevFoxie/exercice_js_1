function square(num) {
    return num * num;
}

let num = prompt("Saisissez un nombre");
let result = square(num);
alert("Le carré de " + num + " est " + result + " :)");