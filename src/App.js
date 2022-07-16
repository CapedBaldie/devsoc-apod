import React from "react";
import BottomBar from "./BottomBar";
import APODreq from "./request";
import DATEForm from "./dateSelector";

function App() {
  return(
    <div className="app">
      <center>
      <h1>Astronomy Picture Of the Day</h1>
      <p><a href="https://apod.nasa.gov/apod/archivepix.html">Discover the cosmos!</a> Each day a different image or
       photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
       </center>
      <APODreq />
      <DATEForm /> 
      <BottomBar />
    </div>
  );
}

export default App;
