
  // my new code


  // const API_KEY="bfcaea903c1a4f5fb2106f23a64e8d04";
  //      const url="https://newsapi.org/v2/everything?q=";


// window.addEventListener('load',()=>fetchNews("india"));

// async function fetchNews(query)
// {
//   const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
//   const data=await res.json();
//   bindData(data.articles);

//     //push new state to history

//      history.pushState({ query }, "", `?query=${query}`);

// }

// function bindData(articles)
// {
//     const cardsContainer=document.getElementById("cards-container");
//     const newsCardTemplate=document.getElementById("template-news-card");
    
//     cardsContainer.innerHTML="";

//     articles.forEach((article) =>{

//         if(!article.urlToImage) return;
//         const cardClone= newsCardTemplate.content.cloneNode(true);
       
//         fillDataInCard(cardClone,article);

//         cardsContainer.appendChild(cardClone);



       
//     });   
// }

//   function fillDataInCard(cardClone, article) {
//     const newsImg = cardClone.querySelector('#news-img');
//     const newsTitle = cardClone.querySelector('#news-title');
//     const newsSource = cardClone.querySelector('#news-source');
//     const newsDesc = cardClone.querySelector('#news-desc');

//     newsImg.src = article.urlToImage;
//     newsTitle.innerHTML = article.title;
//     newsDesc.innerHTML = article.description;

//     let date = new Date(article.publishedAt);
//     // Check if the date is valid
//     if (!isNaN(date.getTime())) {
//         // If valid, convert to the desired timezone
//         date = date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
//         newsSource.innerHTML = `${article.source.name} . ${date}`;
//     } else {
//         // If invalid, handle accordingly (e.g., display a default date)
//         newsSource.innerHTML = `${article.source.name} . Invalid Date`;
//     }

//     cardClone.firstElementChild.addEventListener('click', () => {
//         window.open(article.url, "_blank");
//     });
// }
    
//           function onNavItemClick(id)
//           {
//               fetchNews(id);
              
//           }
       
//         const searchButton=document.getElementById('search-button');
//         const searchText = document.getElementById('search-input');
        
//          searchButton.addEventListener('click',() =>
//          {
//             const query=searchText.value;
//             if(!query) return;
//             fetchNews(query);

//          });

// // Add event listener for Enter key press
// searchText.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         const query = searchText.value;
//         if (!query) return;
//         fetchNews(query);
//     }
// });

// window.addEventListener('popstate', (event) => {
//       const query = event.state ? event.state.query : "india"; // Default to "india" if no state is available
//       fetchNews(query);
//   });

// document.addEventListener("DOMContentLoaded", function() {
//         var icon = document.getElementById('icon');
//         var logo = document.getElementById('logo');
//         var theme = localStorage.getItem('theme');
      
//         // Set initial theme
//         if (theme === 'dark') {
//           document.body.classList.add('dark-theme');
//           icon.src = "sun.png";
//         }
      
//         // Toggle theme
//         icon.onclick = function() {
//           document.body.classList.toggle('dark-theme');
//           if (document.body.classList.contains('dark-theme')) {
//             icon.src = "sun.png";
//             localStorage.setItem('theme', 'dark');
//           } else {
//             icon.src = "moon.png";
//             localStorage.setItem('theme', 'light');
//           }
//         };
      
//         // Check for reload and apply theme
//         if (theme === 'dark') {
//           document.body.classList.add('dark-theme');
//           icon.src = "sun.png";
//         }
//       });
//       function reloadPage() {
            
//               location.reload();
//           }


// function goBackInHistory() {
//     window.history.back();
// }

// // login page 
// var log= document.getElementById("login-from");
// var cre_aco = document.getElementById("creat-account");

// function login_first()
// {
//  log.style.display="block";
//  cre_aco.style.display="none";
// }

// function close_log()
// {
//   log.style.display="none";
// }

// //creat-account

// function creat_log()
// {
//   cre_aco.style.display="block";
//   log.style.display="none";
// }
//  function creat_close()
//  {
//   cre_aco.style.display="none";
//  }





















     // my new code


//      const API_KEY="bfcaea903c1a4f5fb2106f23a64e8d04";
//      const url="https://newsapi.org/v2/everything?q=";
     


// window.addEventListener('load',()=>fetchNews("india"));

// // Function to fetch articles from the API
// async function fetchArticles() {
//   try {
//       const response = await fetch('your-api-endpoint'); // Replace with your API endpoint
//       if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const data = await response.json();
//       const articles = data.articles; // Adjust based on your API structure

//       // Check if articles is defined and is an array
//       if (!articles || !Array.isArray(articles)) {
//           console.error('Articles is either undefined or not an array.');
//           return;
//       }

//       // Process each article
//       articles.forEach((article) => {
//           if (!article.urlToImage) return;

//           const cardClone = newsCardTemplate.content.cloneNode(true);
//           fillDataInCard(cardClone, article);
//           cardsContainer.appendChild(cardClone);
//       });

//   } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//   }
// }

// // Function to fill data in a card
// function fillDataInCard(card, article) {
//   // Assume this function fills in the template with the article data
//   const imgElement = card.querySelector('.card-img');
//   imgElement.src = article.urlToImage;

//   const titleElement = card.querySelector('.card-title');
//   titleElement.textContent = article.title;

//   const descriptionElement = card.querySelector('.card-description');
//   descriptionElement.textContent = article.description;

//   // Add more fields as necessary
// }

// // Call the fetchArticles function to start the process
// fetchArticles();

    
//           function onNavItemClick(id)
//           {
//               fetchNews(id);
              
//           }
       
//         const searchButton=document.getElementById('search-button');
//         const searchText = document.getElementById('search-input');
        
//          searchButton.addEventListener('click',() =>
//          {
//             const query=searchText.value;
//             if(!query) return;
//             fetchNews(query);

//          });

// // Add event listener for Enter key press
// searchText.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         const query = searchText.value;
//         if (!query) return;
//         fetchNews(query);
//     }
// });

// window.addEventListener('popstate', (event) => {
//       const query = event.state ? event.state.query : "india"; // Default to "india" if no state is available
//       fetchNews(query);
//   });

// document.addEventListener("DOMContentLoaded", function() {
//         var icon = document.getElementById('icon');
//         var logo = document.getElementById('logo');
//         var theme = localStorage.getItem('theme');
      
//         // Set initial theme
//         if (theme === 'dark') {
//           document.body.classList.add('dark-theme');
//           icon.src = "sun.png";
//         }
      
//         // Toggle theme
//         icon.onclick = function() {
//           document.body.classList.toggle('dark-theme');
//           if (document.body.classList.contains('dark-theme')) {
//             icon.src = "sun.png";
//             localStorage.setItem('theme', 'dark');
//           } else {
//             icon.src = "moon.png";
//             localStorage.setItem('theme', 'light');
//           }
//         };
      
//         // Check for reload and apply theme
//         if (theme === 'dark') {
//           document.body.classList.add('dark-theme');
//           icon.src = "sun.png";
//         }
//       });
//       function reloadPage() {
            
//               location.reload();
//           }


// function goBackInHistory() {
//     window.history.back();
// }

// // login page 
// var log= document.getElementById("login-from");
// var cre_aco = document.getElementById("creat-account");

// function login_first()
// {
//  log.style.display="block";
//  cre_aco.style.display="none";
// }

// function close_log()
// {
//   log.style.display="none";
// }

// //creat-account

// function creat_log()
// {
//   cre_aco.style.display="block";
//   log.style.display="none";
// }
//  function creat_close()
//  {
//   cre_aco.style.display="none";
//  }











// const API_KEY = "pub_505667485875b84028bffe795cbcc73412e26";
// const url = "https://newsdata.io/api/1/news?apikey=";



const API_KEY = "iWlzorQXY6dWo07oMAyR-pH6e8FQirz0Ubdzk5Cb6uaWx73k";
const url = "https://api.currentsapi.services/v1/latest-news?apiKey=" + API_KEY;

window.addEventListener('load', () => fetchNews("india"));

async function fetchNews(query) {
    try {
        const response = await fetch(`${url}&category=${query}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        bindData(data.news); 

        // Push new state to history
        history.pushState({ query }, "", `?query=${query}`);
    } catch (error) {
        console.error("Error fetching news:", error);
        // Handle the error (e.g., show a message to the user)
    }
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");
    
    cardsContainer.innerHTML = "";

    articles.forEach(article => {
        if (!article.image) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
       
        fillDataInCard(cardClone, article);

        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector('#news-img');
    const newsTitle = cardClone.querySelector('#news-title');
    const newsSource = cardClone.querySelector('#news-source');
    const newsDesc = cardClone.querySelector('#news-desc');

    newsImg.src = article.image;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    let date = new Date(article.published);
    // Check if the date is valid
    if (!isNaN(date.getTime())) {
        // If valid, convert to the desired timezone
        date = date.toLocaleString("en-US", { timeZone: "Asia/Jakarta" });
        newsSource.innerHTML = `${article.source} . ${date}`;
    } else {
        // If invalid, handle accordingly (e.g., display a default date)
        newsSource.innerHTML = `${article.source} . Invalid Date`;
    }

    cardClone.firstElementChild.addEventListener('click', () => {
        window.open(article.url, "_blank");
    });
}

function onNavItemClick(category) {
    scrollToTop();
    fetchNews(category);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling animation
    });
}

const searchButton = document.getElementById('search-button');
const searchText = document.getElementById('search-input');

searchButton.addEventListener('click', () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
});

// Add event listener for Enter key press
searchText.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const query = searchText.value;
        if (!query) return;
        fetchNews(query);
    }
});

window.addEventListener('popstate', (event) => {
    const query = event.state ? event.state.query : "india"; // Default to "india" if no state is available
    fetchNews(query);
});

document.addEventListener("DOMContentLoaded", function() {
    var icon = document.getElementById('icon');
    var logo = document.getElementById('logo');
    var theme = localStorage.getItem('theme');
  
    // Set initial theme
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        icon.src = "sun.png";
    }
  
    // Toggle theme
    icon.onclick = function() {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            icon.src = "sun.png";
            localStorage.setItem('theme', 'dark');
        } else {
            icon.src = "moon.png";
            localStorage.setItem('theme', 'light');
        }
    };
  
    // Check for reload and apply theme
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        icon.src = "sun.png";
    }
});

function reloadPage() {
    location.reload();
}

function goBackInHistory() {
    window.history.back();
}

// Login page
var log = document.getElementById("login-from");
var cre_aco = document.getElementById("creat-account");

function login_first() {
    log.style.display = "block";
    cre_aco.style.display = "none";
}

function close_log() {
    log.style.display = "none";
}

// Create account
function creat_log() {
    cre_aco.style.display = "block";
    log.style.display = "none";
}

function creat_close() {
    cre_aco.style.display = "none";
}
