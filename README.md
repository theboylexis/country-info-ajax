# 🌍 Country Info AJAX App

A simple vanilla JavaScript project that fetches and displays country data using classic XMLHttpRequest. Built to understand asynchronous programming fundamentals before learning Promises and fetch().

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=flat&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/AJAX-XMLHttpRequest-5A9?style=flat" />
  <img src="https://img.shields.io/badge/API-REST%20Countries-FF6C37?style=flat" />
  <img src="https://img.shields.io/badge/Status-Complete-success?style=flat" />
</p>

---

## 📖 Overview

This project demonstrates how to make asynchronous HTTP requests using the **XMLHttpRequest API**. To view country information, you pass a country name as an argument to the request function, which then fetches and displays the data.

**Learning Focus**: Understanding callback-based async JavaScript before moving to modern patterns.

---

## ✨ Features

- 🌐 Fetch data from REST Countries API using XHR
- 🏳️ Display country flag, capital, region, and population
- ⚡ Fully asynchronous data loading
- 📦 Parse and render JSON responses
- 🎨 Clean, card-based UI

---

## 🛠️ Built With

| Technology | Purpose |
|------------|---------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) | Structure |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) | Styling |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) | XMLHttpRequest & DOM manipulation |
| **REST Countries API** | Country data source |

---

## 📁 Project Structure

```
country-ajax-app/
│
├── index.html          # HTML structure
├── style.css           # Styling
├── script.js           # AJAX logic
└── README.md           # Documentation
```

---

## 🚀 How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/country-ajax-app.git
   cd country-ajax-app
   ```

2. **Open in browser**
   ```bash
   open index.html  # macOS
   start index.html # Windows
   ```

3. **View country data**
   - The function is called with a country name as argument
   - Example: `getCountryData('ghana')`
   - Data is fetched and displayed automatically

---

## 💻 How It Works

The core function accepts a country name and makes an XMLHttpRequest:

```javascript
function getCountryData(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  
  request.addEventListener('load', function() {
    const data = JSON.parse(this.responseText);
    // Render country data to DOM
  });
}

// Usage
getCountryData('ghana');
getCountryData('portugal');
```

---

## 💡 Key Concepts Learned

- 📡 **XMLHttpRequest API** - Making HTTP requests the classic way
- ⏳ **Async callbacks** - Handling asynchronous operations with event listeners
- 📦 **JSON parsing** - Converting API responses to JavaScript objects
- 🏗️ **DOM manipulation** - Dynamically rendering data to the page
- 🔄 **REST APIs** - Consuming third-party APIs

---

## 🔌 API Used

**REST Countries API**  
`https://restcountries.com/v3.1/name/{country}`

Returns data including flag, capital, population, region, languages, and more.

[API Documentation](https://restcountries.com/)

---

## 🔄 Learning Path

This project is part of the async JavaScript learning journey:

1. ✅ **XMLHttpRequest** (this project) ← You are here
2. ⏭️ Promises & `.then()`
3. ⏭️ Modern `fetch()` API
4. ⏭️ `async/await` syntax

---

## 🙏 Acknowledgments

Built as part of learning asynchronous JavaScript fundamentals with XMLHttpRequest before transitioning to modern async patterns.

**API**: [REST Countries](https://restcountries.com/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
  Made with 🌍 and vanilla JavaScript
</div>
