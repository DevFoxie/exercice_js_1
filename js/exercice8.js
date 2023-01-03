function valid() {

    let age = document.getElementById("age").value;

    if (isNaN(age)) {
        alert("Saisissez votre âge")
    }
    else {
        if (age >= 18) {
            alert("Vous êtes majeur.")
        }
        else {
            alert("Vous êtes mineur.")
        }
    }
};