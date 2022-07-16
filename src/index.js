import App from './app';
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from './Redux/redux-store'
import {Provider} from "react-redux";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}