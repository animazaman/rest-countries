const loadCountries =() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {
    //console.log(countries);
    const allCountriesHTML = countries.map(country=> getCountryHTML(country));
    //console.log(allCountriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}


const getCountryHTML = country => {
    return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
    </div>
    `
}
  
loadCountries();

/*
Option 1 for destructuring 

const getCountryHTML = country => {
    return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
    </div>
    `
}
*/

/*
Option 2 for destructuring 

const getCountryHTML = country => {
    const {name,flags} = country;
    return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
    </div>
    `
}
*/

/*
Option 3 for destructuring

const getCountryHTML = ({name,flags}) => {
    return `
    <div class="country">
        <h2>${name.common}</h2>
        <img src="${flags.png}">
    </div>
    `
}  
*/