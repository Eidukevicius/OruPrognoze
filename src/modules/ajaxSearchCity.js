function ajaxSearchCity() {
    fetch(`https://api.meteo.lt/v1/places`)
        .then((response)=>response.json())
        .then((data)=>{
        let datalist = document.querySelector('#places');
        for(let stotis of data){
            let places = document.createElement('option')
            places.value = stotis.name;
            places.textContent = stotis.name + " " + stotis.administrativeDivision;
            datalist.appendChild(places)
        }
    })
}
export default ajaxSearchCity