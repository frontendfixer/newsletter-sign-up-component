const newsletter = document.querySelector(".main__newsletter");
const successMessage = document.querySelector(".main__success-message");

const form = newsletter.querySelector("form");
const emailInput = newsletter.querySelector("#email");
const emailErrorSpan = newsletter.querySelector("#email + span.error");

let subscriberEmail = successMessage.querySelector(".subscriber-email");

emailInput.addEventListener("input", (e) => {
  if (e.target.validity.valueMissing) return;
  if (e.target.validity.valid) {
    emailErrorSpan.textContent = "";
    e.target.dataset.isValid = true;
  } else showError();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailInput.validity.valid) {
    showError();
    return;
  }
  subscriberEmail.innerText = emailInput.value;
  newsletter.dataset.visibility = false;
  successMessage.dataset.visibility = true;
  newsletter.classList.toggle("animate");
  successMessage.classList.toggle("animate");
});

function showError() {
  emailErrorSpan.textContent = "Valid email require!";
  emailErrorSpan.classList.add("active");
  emailInput.dataset.isValid = false;
}

successMessage.addEventListener("click", (e) => {
  e.preventDefault();
  const dismissBtn = e.target.closest("button");

  if (!dismissBtn) return;

  newsletter.dataset.visibility = true;
  successMessage.dataset.visibility = false;
  newsletter.classList.toggle("animate");
  successMessage.classList.toggle("animate");
  emailInput.value = "";
});
