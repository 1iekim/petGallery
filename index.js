// DataText for text chapter
// DataFiles for chapter with pet projects info

// Const value;
const langBtn = document.querySelector('.lang');
const gallery = document.querySelector(".gallery");
const lang = document.querySelector(".lang__item--active");

// Change language

langBtn.addEventListener("click", (event) => {
  console.log('click');
  const langItems = event.target.querySelectorAll('span');
  langItems.forEach(item => item.classList.toggle("lang__item--active"));
})

// create gallery
