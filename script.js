document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        document.getElementById("formMessage").textContent = "Спасибо за ваш запрос, мы скоро с вами свяжемся!";
        document.getElementById("formMessage").style.color = "green";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formMessage").textContent = "Пожалуйста, заполните все поля.";
        document.getElementById("formMessage").style.color = "red";
    }
});
