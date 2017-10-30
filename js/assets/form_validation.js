let name = $('.contact-form__name');
let email = $('.contact-form__email');
let message = $('.contact-form__message');
let submitBtn = $('.contact-form__button');
let validationAlert = $('.contact-form__wrong-alert');

let emailValidate = false;
let nameValidate = false;
let messageValidate = false;



submitBtn.on('click', (e) => {

    let alert = "";

    if (email.val().indexOf('@') === -1 || email.val() === "") {
        email.addClass('wrong-input');
        emailValidate = false;
        alert += "Wpisz prawidłowy adres email; "
    } else {
        email.removeClass('wrong-input');
        emailValidate = true;
    }
    if (name.val() === "") {
        name.addClass('wrong-input');
        nameValidate = false;
        alert += "Imię nie może być puste; "
    } else {
        name.removeClass('wrong-input');
        nameValidate = true;
    }

    if (message.val() === "") {
        message.addClass('wrong-input');
        messageValidate = false;
        alert += "Tekst wiadomości nie może być pusty; "
    } else {
        message.removeClass('wrong-input');
        messageValidate = true;
    }

    if (!nameValidate || !emailValidate || !messageValidate) {
        e.preventDefault();
        validationAlert.text(alert);
    }



});