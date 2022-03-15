function logger(reducers) {
  return (prevState, actions) => {
    console.group(actions.type)
    console.log("prevState: ", prevState);
    console.log("Action: ", actions)
    const newState = reducers(prevState, actions)
    console.log("nextState: ", newState);
    console.groupEnd()
    return newState
  }
}

export default logger