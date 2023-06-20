import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import sagaMiddleware, { runSagas } from './sagas'
import reducers from './reducers'

const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose,
  logger = createLogger({
    predicate: (getState, action) => {
      return (__DEV__)
    },
  })

export default function configureStore() {
  const enhancers = composeEnhancers(applyMiddleware(logger, sagaMiddleware))

  const store = createStore(reducers, enhancers)

  runSagas()
  return store
}

export const appStore = configureStore()
