import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddContact} />
        {this.props.prs.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeleteContact(person.id)}
          />
        ))}
      </div>
    );
  }
}

// map a slice of the redux state to something we can access as a property in the container component
const mapStateToProps = state => {
  return {
    prs: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: (name, age) =>
      dispatch({
        type: "ADD_CONTACT",
        personData: { name: name, age: age }
      }),
    onDeleteContact: id =>
      dispatch({
        type: "DELETE_CONTACT",
        personID: id
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
