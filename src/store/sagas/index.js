import createSagaMiddleware from 'redux-saga';
import app from './app';

const sagaMiddleware = createSagaMiddleware();

export const runSagas = () => [app].forEach(item => sagaMiddleware.run(item));

export default sagaMiddleware;
