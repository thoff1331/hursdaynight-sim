import React, { Component } from "react";
import axios from "axios";

class Item extends Component {
  constructor() {
    super();
    this.state = {
      teams: [],
      input: " ",
      newName: ""
    };
    // this.deleteTeam = this.deleteTeam.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleClick() {
    axios
      .post("/api/teams", {
        name: this.state.input
      })
      .then(response => {
        this.setState({
          teams: response.data,
          input: " "
        });
      });
  }
  async handleNewClick(id) {
    let newTeams = await axios.put(`/api/teams/${id}`, {
      newName: this.state.newName
    });

    this.setState({
      teams: newTeams.data
    });
  }
  handleNameChange(e) {
    e.preventDefault();
    this.setState({
      newName: e.target.value
    });
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }
  componentDidMount() {
    axios.get("/api/teams").then(response => {
      this.setState({
        teams: response.data
      });
    });
  }
  deleteTeam(id) {
    axios
      .delete(`/api/teams/${id}`, {
        data: {
          id: id
        }
      })
      .then(response => {
        this.setState({
          teams: response.data,
          input: "",
          editInput: ""
        });
      });
  }

  render() {
    console.log(this.state.newName);
    return (
      <div>
        <div>
          <input onChange={this.handleChange} />
          <button onClick={this.handleClick}> Add Team </button>
        </div>
        {this.state.teams.map(val => {
          return (
            <div key={val.id}>
              <h1>{val.name}</h1>
              <button onClick={() => this.deleteTeam(val.id)}>Delete</button>
              <input onChange={this.handleNameChange} />
              <button onClick={() => this.handleNewClick(val.id)}>
                Edit team Name
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Item;
