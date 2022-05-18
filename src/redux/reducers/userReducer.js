const initialState = [];

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), name: action.payload }];
    case "CHANGE":
      return [
        ...state.map((user) => {
          if (user.id === action.payload.id) {
            return { id: user.id, name: action.payload.name };
          }
          return user;
        }),
      ];
    case "REMOVE":
      return [...state.filter((user) => user.id !== action.payload)];
    default:
      return state;
  }
};
