import React from "react";

class Films extends React.Component {
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => {
        return response.json();
      })
      .then(obj => console.log(obj));
  }

  render() {
    return <h1>Filler</h1>;
  }
}

export default Films;
