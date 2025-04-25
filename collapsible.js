//get all elements with a class of collapsible

const collapsibles = document.querySelectorAll('.collapsible');
console.log(collapsibles);
//Loop through each element we selected
collapsibles.forEach((item) => {
  item.addEventListener('click', function () {
    this.classList.toggle('collapsible-expanded');
  });
});
