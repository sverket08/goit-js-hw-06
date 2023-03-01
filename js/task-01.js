const itemEl = document.querySelectorAll('.item');
console.log("Number of categories:" + itemEl.length);

const item = [...itemEl].map((itemEl) => {
  console.log("Category: " + itemEl.firstElementChild.textContent);
  console.log("Elements: " + itemEl.lastElementChild.children.length);
});
