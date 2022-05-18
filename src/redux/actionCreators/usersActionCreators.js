export function addUser(name) {
  return {
    type: "ADD",
    payload: name,
  };
}

export function changeUser(id, name) {
  return {
    type: "CHANGE",
    payload: { id, name },
  };
}

export function removeUser(id) {
  return {
    type: "REMOVE",
    payload: id,
  };
}
