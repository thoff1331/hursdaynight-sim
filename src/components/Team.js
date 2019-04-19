import React, { Component } from "react";
import axios from "axios";

class Team extends Component {
  constructor({ match }) {
    super();
    this.state = {
      team: []
    };
  }
  componentDidMount() {
    axios.get(`/api/teams/+${this.props.match.params.id}`).then(response => {
      console.log(response);
      this.setState({
        team: response.data
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.team.map(item => {
          return <h1 key={item.id}>{item.name}</h1>;
        })}
      </div>
    );
  }
}

export default Team;
