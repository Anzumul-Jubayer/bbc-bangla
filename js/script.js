// all fetch
// categories fetch
const loadCategories = () => {
  const url = "https://news-api-fs.vercel.app/api/categories";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayCategories(data.categories))
    .catch((err) => console.log(err));
};

// news category fetch
const loadNewsCategoriesById = (categoreyid) => {
  const url = `https://news-api-fs.vercel.app/api/categories/${categoreyid}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayNewsArticles(data.articles))
    .catch((err) => {showError(err)
    });
};

// display
const displayCategories = (titles) => {
  const categoreyContainer = document.getElementById("categorey-container");
  titles.forEach((title) => {
    const categoreyli = document.createElement("li");
    categoreyli.id = title.id;
    categoreyli.className =
      "hover:border-b-4 border-red-600  hover:border-red-600 cursor-pointer";
    categoreyli.textContent = title.title;
    categoreyContainer.appendChild(categoreyli);
  });

  const main = document.querySelector("#main");
  if (main) {
    main.classList.add("border-b-4");
  }

  categoreyContainer.addEventListener("click", (event) => {
    const allLi = categoreyContainer.querySelectorAll("li");
    allLi.forEach((li) => {
      li.classList.remove("border-b-4");
    });
    if (event.target.localName === "li") {
      showLoading()
      event.target.classList.add("border-b-4");
      loadNewsCategoriesById(event.target.id);
    }
  });
};

// displayNewsArticles
const displayNewsArticles = (articles) => {
  const newsContainer = document.getElementById("news-container");
  if(articles.length===0){
    showEmpty()
    return
  }
  newsContainer.innerHTML = "";
  articles.forEach((article) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div>
        <img src="${article.image.srcset[5].url}"/>
      </div>
      <h1 class="font-bold text-xl my-2">${article.title}</h1>
      <div id="${article.id}" class="p-2">
        <p class="text-gray-400 text-sm">${article.time}</p>
        <button class="btn mt-2">Bookmarks</button>
         <button class="btn ml-2 mt-2">View Details</button>
      </div>
    `;
    newsContainer.appendChild(div);
  });
};

// bookMark
let bookMarks = [];
const bookMarkContainer = document.getElementById("bookmark-container");
const newsContainer = document.getElementById("news-container");
const modalContainer=document.getElementById('modal-container')
const newsDetailsModal=document.getElementById('news-details-modal')

newsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON" && event.target.innerText === "Bookmarks") {
    bookMarkHandler(event);
    displayBookMarks(bookMarks);
  }
  if (event.target.tagName === "BUTTON" && event.target.innerText === "View Details") {
    handleViewDetails(event)
   
  }
});
const handleViewDetails=((event)=>{
  const id=event.target.parentNode.id
  // newsDetailsModal.showModal()
  fetch(`https://news-api-fs.vercel.app/api/news/${id}`)
  .then((response)=>response.json())
  .then((data)=>{
    showDetailsNews(data.article)
  }).catch((err)=>{
    console.log(err)
  })
  
})
const showDetailsNews=((article)=>{
  newsDetailsModal.showModal()
  modalContainer.innerHTML=`
   <h1 class="font-bold text-xl">${article.title}</h1>
   <img src="${article.images[1].url}"/>
   <p class="my-3">${article.content.join("")}</p>
  `
})

const bookMarkHandler = (event) => {
  const parent = event.target.parentNode;
  const title = parent.previousElementSibling.innerText; 
  const id = parent.id;
  bookMarks.push({
    title: title,
    id: id,
  });
};

const displayBookMarks = (bookMarks) => {
  bookMarkContainer.innerHTML = ""; 
  bookMarks.forEach((bookMark) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="border my-2 p-3">
        <h1 class="font-bold mb-2">${bookMark.title}</h1>
        <button onclick="handleBookMarksDelete('${bookMark.id}')" class="btn btn-xs">Delete</button>
      </div>
    `;
    bookMarkContainer.appendChild(div);
  });
};

const handleBookMarksDelete = (bookmarkId) => {
  bookMarks = bookMarks.filter(bm => bm.id !== bookmarkId);
  displayBookMarks(bookMarks);
};

const showLoading=(()=>{
  newsContainer.innerHTML=` <div class="bg-green-600 p-3 rounded-lg"><h1 class="font-semibold text-white">Loading...</h1></div>`
})
const showError=(()=>{
     newsContainer.innerHTML=` <div class="bg-red-600 p-3 rounded-lg"><h1 class="font-semibold text-white">Something went wrong</h1></div>`
})
const showEmpty=(()=>{
  newsContainer.innerHTML=` <div class="bg-yellow-400 p-3 rounded-lg"><h1 class="font-semibold text-white">No news found </h1></div>`
})

// function call
loadCategories();
loadNewsCategoriesById("main");
