'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
//  https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
//CREATING AJAX CALLS (OLD WAY - XMLHTTP REQUEST FUNCTION)
// const getCountryData = function (country) {
//     const request = new XMLHttpRequest()
//     //URL to make AJAX call using GET - Background activity(asynchronous)
//     request.open("GET", `https://restcountries.com/v2/name/${country}`)
//     request.send()
//     //registering callback on request object
//     request.addEventListener("load", function () {
//         //converting JSON data into an object
//         const [data] = JSON.parse(this.responseText)
//         console.log(data)

//         //building component
//         const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//     </article>
//         `
//         //displaying HTML content
//         countriesContainer.insertAdjacentHTML("beforeend", html)
//         //updating opacity style
//         countriesContainer.style.opacity = 1
//     })
// };

//Exporting data into its own functionality
const renderCountry = function(data) {
    //Exporting data into its own functionality
    const html = `
    <article class="country">
        <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${+(data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
          </div>
    </article>
        `
        //displaying HTML content
        countriesContainer.insertAdjacentHTML("beforeend", html)
        //updating opacity style
        countriesContainer.style.opacity = 1
    })
}

const getCountryAndNeighbour = function (country) {
    //AJAX call for first country
    const request = new XMLHttpRequest()
    //URL to make AJAX call using GET - Background activity(asynchronous)
    request.open("GET", `https://restcountries.com/v2/name/${country}`)
    request.send()
    //registering callback on request object
    request.addEventListener("load", function () {
        //converting JSON data into an object
        const [data] = JSON.parse(this.responseText)
        console.log(data)
        
        //Rendering first country
        renderCountry(data)

        //Getting neighbour country info
        const [neighbour] = data.borders?.[0]

        if(!neighbour) return;

        //AJAX call for second country
        const requestTwo = new XMLHttpRequest()
        //URL to make AJAX call using GET - Background activity(asynchronous)
        requesTwo.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`)
        requestTwo.send()

        requestTwo.addEventListener("load", function () {
        //converting JSON data into an object
        const dataTwo = JSON.parse(this.responseText)
            console.log(dataTwo)

            renderCountry(dataTwo)
        };
    };
};


//SIMULATANEOUS AJAX CALLS
getCountryAndNeighbour("ghana")
// getCountryAndNeighbour("nigeria")
// getCountryAndNeighbour("egypt")




