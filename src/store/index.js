import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = { tech: "React", stack: "middle", fullstack: {
  frontend: "css", backend: "php"
}, };
export const store = createStore(reducer, initialState);