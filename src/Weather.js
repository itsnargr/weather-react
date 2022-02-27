import React from"react";
import axios from "axios";
export default function Weather (props){
function handleResponse(response){
    alert(`the weather in ${props.city} is ${response.data.main.temp}C`);}
    let apiKey = "be81f193e065bf5feb2d944c7336968b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
    return(
        <h1>hello from react app</h1>
    )
}
