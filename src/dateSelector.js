import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import moment from "moment";

class DATEForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      let date = this.state.value;  
      let length = date.length;
      let dateque = "ap"+date.substring(2,4)+date.substring(5,7)+date.substring(8)+".html";
      let currDate = moment().format("YYYY-MM-DD");
      //console.log(date)
      //console.log(currDate)
      //console.log(moment({date}).isAfter("2022-07-20"))
      if(length != 10)
        alert("Please enter date in correct format. Thank You.")
      else {
        //if(moment({date}).isAfter({currDate}))
          //alert("Please enter a date before {currDate}")
        //else {
          //console.log(moment({date}).isAfter({currDate}));
          window.location.href = `https://apod.nasa.gov/apod/${dateque}`
        //}
      }
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="req">
          <text><b>For APOD of a different day</b></text>
          <form onSubmit={this.handleSubmit}>
            <label>
              Date in YYYY-MM-DD format:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }

export default DATEForm 