import React from 'react';

class People extends React.Component {

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((response) => {
            return response.json();
        })
        .then((obj) => console.log(obj));
    }

    render() {
        return (
            <h1>This is the people page.</h1>
        )
    }
}

export default People;