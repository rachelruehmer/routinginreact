import React from "react";

class People extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(response => response.json())
      .then(people => this.setState({ people }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <h1>People from Studio Ghibli Films</h1>
        {this.state.people.map(people => {
          return <h1>{people.name}</h1>;
        })}
      </React.Fragment>
    );
  }
}

export default People;
