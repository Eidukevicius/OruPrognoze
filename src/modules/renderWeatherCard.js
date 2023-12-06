import weatherCard from "./weatherCard";

const renderWeatherCard = ()=>{
    for (let i = 0; i < 7; i++){
        let weatherWidget = document.createElement('div');
        weatherWidget.className = 'card';
        weatherWidget.innerHTML = weatherCard();
        document.querySelector('.forecast').appendChild(weatherWidget);
    }
    
}
export default renderWeatherCard;