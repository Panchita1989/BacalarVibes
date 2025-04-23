const languageSwitcher = document.getElementById('languageSwitcher')
const langElements = {
    title: document.getElementById('title'),
    navTours: document.getElementById('nav-tours'),
    navRestaurant: document.getElementById('nav-restaurant'),
    subtitle: document.getElementById('subtitle'),
    description: document.getElementById('description')
}
let currentLang = localStorage.getItem('lang') || 'en'
//console.log('1. Sprache geladen aus localStorage oder Standard:', currentLang);
loadLanguage(currentLang)
//console.log('2. Sprache im Dropdown gesetzt', languageSwitcher.value)
languageSwitcher.value = currentLang
//console.log('3. Sprache wird geladen...')

languageSwitcher.addEventListener('change', e =>{
    const selectedLang = e.target.value
    localStorage.setItem('lang', selectedLang)
    loadLanguage(selectedLang)
})
/*/
We're adding an event listener to the language dropdown (languageSwitcher)
It listens for the change event, which occurs when the user selects a different language
The e (short for event) is an event object that contains information about what happened

e.target → refers to the element that triggered the event (in this case, the <select> dropdown)

e.target.value → gives us the currently selected value, like "en", "de", "es", or "fr"

So const selectedLang = e.target.value saves the selected language code into a variable
/*/
async function loadLanguage(lang) {
    try {
        const res = await fetch(`lang/lang.${lang}.json`)
        const data =await res.json()

        langElements.title.textContent = data.title
        //langElements.navTours.textContent = data.nav.tours
        //langElements.navRestaurant.textContent = data.nav.restaurantes
        langElements.subtitle.textContent = data.subtitle
        langElements.description.textContent = data.description
    }
    catch (err)  {
        console.log(err)
    } 
    
}