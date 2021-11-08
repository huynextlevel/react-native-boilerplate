import * as Actions from '../actions';

const initialState = {
  counter: 0,
  loginData: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.IncreaseCounter:
      return { ...state, counter: state.counter + action.volume };
    case Actions.SaveLoginData:
      return { ...state, loginData: action.values };
    case Actions.ResetAppStore:
      return initialState;
    default:
      return state;
  }
};
