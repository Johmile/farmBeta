import React, { Component } from "react";
import "../css/Favorites.css";
import { Button } from "semantic-ui-react";

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(event) {
    this.props.callBackFromParent(event.target.value);
  }

  render() {
    let cityElements = this.props.savedCities.map((city) => {
      return <Button className = "Favorites-btn btn btn-success text-light "
      
      size = "tiny"
      value = {
        city
      }
      key = {
        `${city}-button`
      }
      onClick = {
        this.getWeather
      }
      content = {
        city
      }
      />;
    });

    return (
      <div className="Favorites">
        <h3 className="Favorites-title text-capitalize">My favorite cities <i className="fa fa-city"></i></h3>
        <div className="Favorites-button-container">
          {cityElements}
        </div>
      </div>
    );
  }
}

export default Favorites;
