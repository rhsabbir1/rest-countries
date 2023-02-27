const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = (data) =>{
    const allCountry = document.getElementById('all-country')
    data.forEach((country) =>{
        console.log(country)
        const ceratDiv = document.createElement('div');
        ceratDiv.classList.add('country')

        ceratDiv.innerHTML = `
        <img src="${country.flags.png}" alt="">
        <h1>Name :${country.name.common} </h1> 
        <p>Capital : ${country.capital ? country.capital[0] : 'No Capital'}</p>
        `;
        allCountry.appendChild(ceratDiv)
    })
}

loadCountries()