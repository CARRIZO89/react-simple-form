const addToList = contact => {
  return {
    type: "ADD_TO_LIST",
    contact
  };
};

export { addToList };
