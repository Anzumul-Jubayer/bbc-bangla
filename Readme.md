# 📰 BBC বাংলা Clone (News App)

A simple **news portal web application** built using **HTML, Tailwind CSS (with DaisyUI)**, and **Vanilla JavaScript**.  
It fetches data from a public API, displays categories, news articles, and allows users to **bookmark** their favorite articles and view details in a modal.

---

## 🚀 Features

- 🔎 **Dynamic Categories** – Fetched from API and displayed as navigation.
- 📰 **News Articles** – Load articles based on selected category.
- ⭐ **Bookmark System** – Add/remove articles to bookmarks.
- 📖 **View Details** – Open full article content inside a modal.
- ⏳ **Loading State** – Displays a loading message while fetching data.
- ⚠️ **Error & Empty Handling** – Shows proper message if API fails or no news is available.

---

## 🛠️ Technologies Used

- **HTML5**
- **Tailwind CSS** + **DaisyUI**
- **Vanilla JavaScript (ES6+)**
- **News API** → [https://news-api-fs.vercel.app](https://news-api-fs.vercel.app)

---

## 📂 Project Structure

.
├── index.html # Main HTML file
├── style/
│ └── style.css # Custom styles (if needed)
├── js/
│ └── script.js # Main JavaScript logic
└── assets/ # Logo & favicon files

yaml
Copy code

---

## ⚡ How It Works

1. **Categories Load**  
   - On page load, categories are fetched from API and displayed in the navbar.  

2. **News Load by Category**  
   - Clicking a category fetches and displays related news.  

3. **Bookmark System**  
   - Users can add news to bookmarks.  
   - Bookmarks are listed in the sidebar with a delete option.  

4. **View Details (Modal)**  
   - Clicking **View Details** fetches the full article and shows it in a modal.  

5. **Error/Empty Handling**  
   - Loading state (`Loading...`)  
   - Error message (`Something went wrong`)  
   - Empty state (`No news found`)  

---



🌐 Live Demo
👉 [BBC বাংলা ](https://anzumul-jubayer.github.io/bbc-bangla/)



