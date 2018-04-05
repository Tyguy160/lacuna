import React from "react";
class Chart extends React.Component {
  handleClick = () => {
    console.log("Clicked");
  };
  render() {
    return (
      <li>
        <img src={image} alt={name} />
        <h3>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {1 ? "Add To Order" : "Sold out!"}
        </button>
      </li>
    );
  }
}

export default Chart;