let searchButton = document.querySelector(".search__button");
let countryInput = document.querySelector(".search__input");

searchButton.addEventListener("click", () => {
    let countryName = countryInput.value;
    let finalURL = `https://restcountries.com/v3/name/${countryName}?fullText=true`;
    console.log(finalURL);

    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags[0]);
        console.log(data[0].name.common);
        console.log(data[0].maps.openStreetMaps);
        console.log(data[0].continents[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(", ") );


        result.innerHTML = `
          <img src="${data[0].flags[0]}" class="flag__img" >
          <div class="country__common">Name : <span class="font__light"> ${data[0].name.common} </span></div>
          <div class="country__capital"> Capital : <span class="font__light">${data[0].capital[0]}</span></div>
          <div class="country__continents">Continents:<span class="font__light"> ${data[0].continents[0]}</span></div>
          <div  class="country__map">Map:<span class="font__light">  ${data[0].maps.openStreetMaps}</span></div>
          <div class="country__currencies">Currencies :<span class="font__light"> ${data[0].currencies[Object.keys(data[0].currencies)].name}</span></div>
          <div class="country__languages">Languages :<span class="font__light"> ${Object.values(data[0].languages).toString().split(",").join(", ")}</span></div>
          
          `;

         } );
    });



