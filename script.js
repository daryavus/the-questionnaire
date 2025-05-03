const form = document.querySelector(".form");
const firstName = document.querySelector("#name");
const secondName = document.querySelector("#secondName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const agree = document.querySelector("#agree");
const message = document.querySelector(".message");

form.addEventListener("submit", (event) => {
  // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
  // https://learn.javascript.ru/default-browser-action
  event.preventDefault();

  // Здесь твой код
  fetch(`https://polinashneider.space/user`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: daryavus'
    },
    body: JSON.stringify({
      "name": firstName.value.trim(),
      "secondName": secondName.value.trim(),
      "phone": phone.value.trim(),
      "email": email.value.trim(),
      "agree": agree.checked
    }),
  })
  .then(response => response.json())
  .then((result) => {
    message.classList.remove("hidden");
    form.reset();
  })
  .catch((error) => {
    message.textContent = "Ошибка! Попробуйте ещё раз.";
    message.classList.remove("hidden");
  })
});
