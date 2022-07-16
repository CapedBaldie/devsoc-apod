import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function APODreq(){
    
    const [data, setData] = useState([])

    //console.log("hello1");
    
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
     useEffect(() => { 
      fetch("https://api.nasa.gov/planetary/apod?api_key=3eGYa7bNbAXODeUXGJv97APwzDqbj17mgVOOz3ED", requestOptions)
        .then(response => response.json())
        .then(result => {
            /*console.log(result)*/
            setData(result)
        }).catch(error => console.log('error', error)); 
    }, [])

    const media = data.media_type === "image" ? 
    <img src={data.url} alt="See Explanation.  Clicking on the picture will download
    the highest resolution version available." /> : 
    <iframe src={data.url} title={data.title} />
      
    return(
        <div align="center">
            {data.date}
            <br></br>
            <a href={data.hdurl}>
            {media}
            </a>
            <br></br>
            <p><b>{data.title}</b></p>
            <p><b>Explanation: </b> {data.explanation}</p>
        </div>
    );
}

export default APODreq;