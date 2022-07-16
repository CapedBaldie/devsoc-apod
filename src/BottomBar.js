import React from "react";
import "./App.css";

function BottomBar(){
    return(
        <div className="bottombar" align="center">            
            <hr></hr>
            <a href="https://apod.nasa.gov/apod/ap220714.html">&lt;</a>{" "} 
            | <a href="https://apod.nasa.gov/apod/archivepix.html">Archive</a>{" "} 
            | <a href="https://apod.nasa.gov/apod/lib/apsubmit2015.html">Submissions</a> {" "} 
            | <a href="https://apod.nasa.gov/apod/lib/aptree.html">Index</a>{" "} 
            | <a href="https://antwrp.gsfc.nasa.gov/cgi-bin/apod/apod_search">Search</a>{" "} 
            | <a href="https://apod.nasa.gov/apod/calendar/allyears.html">Calendar</a>{" "} 
            | <a href="https://apod.nasa.gov/apod.rss">RSS</a>{" "} 
            | <a href="https://apod.nasa.gov/apod/lib/edlinks.html">Education</a>{" "} 
            | <a href="https://apod.nasa.gov/apod/lib/about_apod.html">About APOD</a>{" "} 
            | <a href="http://asterisk.apod.com/discuss_apod.php?date=220715">Discuss</a>{" "} 
            | <a href="https://apod.nasa.gov/apod/ap220716.html">&gt;</a>
            <hr></hr>   
            <p>
            <b> Authors & editors: </b>
            <a href="http://www.phy.mtu.edu/faculty/Nemiroff.html">Robert Nemiroff</a>{" "}
            (<a href="http://www.phy.mtu.edu/">MTU</a>) & {" "}
            <a href="https://antwrp.gsfc.nasa.gov/htmltest/jbonnell/www/bonnell.html">Jerry Bonnell</a> {" "}
            (<a href="http://www.astro.umd.edu/">UMCP</a>)
            <br></br>
            <b>NASA Official: </b> Phillip Newman {" "}
            <a href="lib/about_apod.html#srapply">Specific rights apply</a>.
            <br></br>
            <a href="https://www.nasa.gov/about/highlights/HP_Privacy.html">NASA Web Privacy Policy and Important Notices</a>
            <br></br>
            <b>A service of:</b>{" "}
            <a href="https://astrophysics.gsfc.nasa.gov/">ASD</a> at{" "}
            <a href="https://www.nasa.gov/">NASA</a> /{" "}
            <a href="https://www.nasa.gov/centers/goddard/">GSFC</a>
            <br></br>
            <b>&</b> <a href="http://www.mtu.edu/">Michigan Tech. U.</a>
            <br></br>
            </p>         
        </div>
    );
}

export default BottomBar;