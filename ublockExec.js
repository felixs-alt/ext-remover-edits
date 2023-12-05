/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 191) {
      eval(prompt("Eval:"));
  }
})
