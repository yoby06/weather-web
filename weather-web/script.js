const url = "https://api.openweathermap.org/data/2.5/"
const key = "054f22eb00ac34df5f998078cb6c63af" // Profilden aldık.


const setQuery = (e) => {
    if(e.keyCode == "13")  // Enter key code
        getResult(searchBar.value)  //Değere erişebilmek için
}

const getResult = (cityName) => {

    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`  //API Call by Name  Link


    // Promise yapısı, JavaScript’te oluşturulan kompleks ve okunabilirliği düşük olan fonksiyon yapıları için geliştirilmiş bir yapıdır.

    fetch(query)  // Nereden bilgi almak istediğimizi yazdık. Weather'I almak için kullandık.
    .then( weather => {
        return weather.json()
    } )
    .then(displayResult)

}

const displayResult = (result) => {
    let city = document.querySelector(".city")  //city class'ını tuttuk
    city.innerText = `${result.name}, ${result.sys.country}`;  // resulttan aldığımız şehirin adını ve ülkeyi yazdık.

    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(result.main.temp)}°C`  // Resulttan aldığımız hava durumunu yazdık.

    let desc = document.querySelector(".desc");
    desc.innerText = result.weather[0].description;

    let minmax = document.querySelector(".minmax");
    minmax.innerText = result = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;

}

const searchBar = document.getElementById("searchBar")
searchBar.addEventListener("keypress",setQuery)