import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import authReducer from "./shared/redux/reducers/authReducer.js";
import "./index.scss";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(/* tus middlewares aquí */))
);

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);
