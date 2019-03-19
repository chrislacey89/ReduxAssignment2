const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      const newContact = {
        id: Math.random(),
        name: "Chris",
        age: Math.floor(Math.random() * 40)
      };

      return {
        ...state,
        persons: state.persons.concat(newContact)
      };

    case "DELETE_CONTACT":
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.personID)
      };
  }
  return state;
};

export default reducer;
