import {createStore, applyMiddleware, compose} from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";
import App from "../App";

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose; //esta linea nos sirve para conectar nuestra app con la extension delnavegador redux devtools

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // esta linea sirve para que podamos hacer peticiones a una api/servidor
    )

export default store;
