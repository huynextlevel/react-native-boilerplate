# React Native Boilerplate

[![React Native](https://img.shields.io/badge/React%20Native-v0.66.2-green.svg)](https://facebook.github.io/react-native/)
[![React Navigation V6](https://img.shields.io/badge/React%20Navigation-v6.0-blue.svg)](https://reactnavigation.org/)

React Native Boilerplate is a starting point for React Native application. This project is configured with redux, redux saga.
Uses latest version of react-navigation (v6.0).

## Features
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Navigation](https://reactnavigation.org/) with [Authentication flow](https://reactnavigation.org/docs/auth-flow) baked in & theming support.
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Redux](http://redux.js.org/) with [hooks](https://react-redux.js.org/api/hooks) support
- [Redux Saga](https://redux-saga.js.org/)
- [Jest](https://facebook.github.io/jest/)
- [Eslint](http://eslint.org/)


## How this looks
  <img height="720" src="https://d2zewnjni0wt2q.cloudfront.net/react-native-boilerplate.gif" />
  
## Prerequisites

- [Node](https://nodejs.org) v10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/)
- A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo, `git clone https://github.com/huynextlevel/react-native-boilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder, `rm -rf .git`
4. Use [React Native Rename](https://github.com/junedomingo/react-native-rename) to update project name `$ npx react-native-rename <newName>`
5. Run `yarn` to install dependencies
6. Run `cd ios && pod install`

7. Start the packager with `yarn start`
8. Connect a mobile device to your development machine
9. Run the test application:

- On Android:
  - Run `react-native run-android` or Use Android Studio (Recommended)
- On iOS:
  - Open `ios/YourReactProject.xcworkspace` in Xcode
  - Hit `Run` after selecting the desired device

10. Enjoy!!!

## Contributing

PRs are welcome