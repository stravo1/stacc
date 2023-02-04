import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";
import App from "./App";
import Stacc from "./routes/Stacc";
import Settings from "./routes/Settings";

import { CustomProvider } from "rsuite";

import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import store from "./store/store";
import { actions as d_actions } from "./store/slices/dailySlice";
import { actions as w_actions } from "./store/slices/weeklySlice";
import { actions as m_actions } from "./store/slices/monthlySlice";

import About from "./routes/About";
import NotFound from "./routes/NotFound";

import { GoogleOAuthProvider } from "@react-oauth/google";

var CLIENT_ID =
  "25256502274-6b15ibif1usnm9rtbi4blennjrvrl5lm.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={CLIENT_ID}>
    <React.StrictMode>
      <BrowserRouter>
        <CustomProvider theme="dark">
          <Routes>
            <Route
              path="/"
              element={
                <Provider store={store}>
                  <App />
                </Provider>
              }
            >
              <Route
                index
                element={<Stacc title="daily" actions={d_actions} />}
              />
              <Route
                path="stacc"
                element={<Stacc title="daily" actions={d_actions} />}
              />
              <Route
                path="daily"
                element={<Stacc title="daily" actions={d_actions} />}
              />
              <Route
                path="weekly"
                element={<Stacc title="weekly" actions={w_actions} />}
              />
              <Route
                path="monthly"
                element={<Stacc title="monthly" actions={m_actions} />}
              />
              <Route path="settings" element={<Settings />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>,

);