const _SPINNER = `
<div class="text-center">
<div class="spinner-grow text-light" role="status" style="width: 20rem; height: 20rem;">
<span class="visually-hidden">Loading...</span>
</div>
</div>`;

const _SPINNER_BTN = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
<span class="visually-hidden">Loading...</span>`;


const _SEARCHFAIL = `<main class="container">
<div class="bg-light p-5 rounded">
  <h1>No Luck today :(</h1>
  <p class="lead">Try harder next time - no one gets ride for free.</p>
</div>
</main>`

// ========================================= DEBOUNCER ========================================= \\

// Originally inspired by  David Walsh (https://davidwalsh.name/javascript-debounce-function)
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
