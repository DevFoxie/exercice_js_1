let shoeSize ="Quelle est votre pointure ?"
let yearOfBirth ="Quelle est votre date de naissance ?"

alert(shoeSize + "\n" + yearOfBirth);

const form = document.querySelector('form');
const shoeSizeInput = document.querySelector('#shoeSize');
const yearOfBirthInput = document.querySelector('#yearOfBirth');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', event => {
    event.preventDefault();

  const shoeSize = shoeSizeInput.value;
  const yearOfBirth = yearOfBirthInput.value;

 let result = (shoeSize * 2 + 5) * 50 - yearOfBirth + 1766;
 alert(`Le résultat des opérations est : ` + result);
});

