import React from "react";

class Films extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    }
    }
  


  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(films => this.setState({films}))
      .catch(err => console.log(err))
      
  }

  render() {
    return (
    <React.Fragment>
         <h1>Studio Ghibli Films</h1>
         {this.state.films.map (film => {
           return( <h1>{film.title}</h1>
           )
         })}
    </React.Fragment>
    )
  }
}


export default Films;
