/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 221) {
      eval(prompt("Eval:"));
  }
})
