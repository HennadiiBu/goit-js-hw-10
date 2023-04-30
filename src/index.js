import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const userSeach = document.querySelector('#search-box');
userSeach.addEventListener('input', debounce(onUserInput, DEBOUNCE_DELAY));

function onUserInput(event) {
  const inputValue = event.target.value.trim();
  if (!inputValue) {
    return;
  }
  fetchCountries(inputValue)
    .then(data => {
      const capitals = data.map(elem => elem.name);
      if (capitals.length > 2 && capitals.length < 10) {
        countryInfo.innerHTML = '';
        countryList.innerHTML = '';
        const marckupCountyList = data.map(
          elem =>
            `<li><img src="${elem.flags.svg}" alt="${elem.name.official} width="30px" height="30px"><h1>${elem.name.official}</h1></li>`
        );
        countryList.insertAdjacentHTML('beforeend', marckupCountyList.join(''));
      } else if (capitals.length === 1) {
        countryInfo.innerHTML = '';
        countryList.innerHTML = '';
        const markupCountyList = data.map(
          elem =>
            `<li><img src="${elem.flags.svg}" alt="${elem.name.official} width="100px" height="100px"><h2>${elem.name.official}</h2></li>`
        );
        const markUpCountryInfo = data.map(
          elem => ` <h2>Capital: ${elem.capital}</h2>
                    <h2>Population: ${elem.population}</h2>
                    <h2>Languages: ${Object.values(elem.languages)}</h2>`
        );
        countryList.insertAdjacentHTML('beforeend', markupCountyList.join(''));
        countryInfo.insertAdjacentHTML('beforeend', markUpCountryInfo.join(''));
      } else if (userSeach.value === '') {
        countryInfo.innerHTML = '';
        countryList.innerHTML = '';
      } else {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        countryInfo.innerHTML = '';
        countryList.innerHTML = '';
      }
    })
    .catch(err => {
      console.log(err);
      Notiflix.Notify.failure('Oops, there is no country with that name');
      countryInfo.innerHTML = '';
      countryList.innerHTML = '';
    });
}
