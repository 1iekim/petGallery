// DataText for text chapter
// DataFiles for chapter with pet projects info

//______________________________________________________________________________________
// Const value;

const langBtn = document.querySelector('.lang');
const gallery = document.querySelector(".gallery");
/* content text and link */
const contentText = document.querySelector(".content__text");
const contentLink = document.querySelector(".content__link");

let lang = document.querySelector(".lang__item--active");

//______________________________________________________________________________________
// Change language

langBtn.addEventListener("click", (event) => {
  const langItems = event.target.closest('button').querySelectorAll('span');
  langItems.forEach(item => item.classList.toggle("lang__item--active"));
  lang = document.querySelector(".lang__item--active");
  changeText();
})

//______________________________________________________________________________________
// Add text

function changeText() {
  contentText.innerText = lang.innerText === "en" ? DataText.textEn : DataText.textRu;
  contentLink.innerText = lang.innerText === "en" ? DataText.linkTextEn : DataText.linkTextRu;
  contentLink.href = lang.innerText === "en" ? DataText.linkEn : DataText.linkRu;
}
changeText();

//______________________________________________________________________________________
// Create gallery

function createGalleryItem(elem) {
  const box = document.createElement('div');
  box.className = "gallery__item project";
  
  const img = document.createElement('img');
  img.classList.add("project__img");
  img.src = elem.img;
  img.alt = elem.title;
  
  const link = document.createElement('a');
  link.classList.add("project__link");
  link.href = elem.link;
  link.target = "_blank";
  link.innerText = lang.value === 'en' ? "Open!" : "Посмотреть!";

  const title = document.createElement('h3');
  title.classList.add("project__title");
  title.innerText = elem.title;

  const description = document.createElement('p');
  description.classList.add("project__description");
  description.innerText = elem.description;

  const tools = document.createElement("ul");
  tools.classList.add("project__tools");

  elem.tools.map(tool => {
    const li = document.createElement('li');
    li.classList.add('project__tools-item');
    li.innerText = tool;

    tools.append(li);
  })


  box.append(img);
  box.append(title);
  box.append(description);
  box.append(tools);
  box.append(link);

  gallery.append(box);
}

DataFiles.forEach(file => createGalleryItem(file));