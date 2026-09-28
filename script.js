const tabButtons = document.querySelectorAll('.tab-button');
const panels = document.querySelectorAll('.form-panel');
const toggleButtons = document.querySelectorAll('.toggle-password');
const resetLinks = document.querySelectorAll('[data-target="reset"]');
const backButtons = document.querySelectorAll('[data-target="login"]');

function switchForm(target) {
  tabButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.target === target);
  });

  panels.forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.form === target);
  });
}

tabButtons.forEach((button) => {
  button.addEventListener('click', () => switchForm(button.dataset.target));
});

resetLinks.forEach((button) => {
  button.addEventListener('click', () => switchForm('reset'));
});

backButtons.forEach((button) => {
  button.addEventListener('click', () => switchForm('login'));
});

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const input = button.parentElement.querySelector('input');
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    button.textContent = isPassword ? 'Hide' : 'Show';
  });
});

const forms = document.querySelectorAll('form');
forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitButton = form.querySelector('.primary-btn');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Submitted';
    submitButton.disabled = true;

    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }, 1400);
  });
});
