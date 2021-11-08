import * as Actions from '../actions';

export function increaseCounter(volume = 1) {
  return { type: Actions.IncreaseCounter, volume };
}

export function login(values, navigation) {
  return { type: Actions.Login, payload: { values, navigation } };
}

export function saveLoginData(values) {
  return { type: Actions.SaveLoginData, values };
}

export function resetAppStore() {
  return { type: Actions.ResetAppStore };
}
