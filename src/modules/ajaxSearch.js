const ajaxSearch = (city)=>{
    return fetch(`https://api.meteo.lt/v1/places/${city}/forecasts/long-term`)
    .then(response=>response.json())
}

export default ajaxSearchz