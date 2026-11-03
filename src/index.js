import React from "react";
import { createRoot } from "react-dom/client";
import posthog from "posthog-js";
import "./index.css";
import App from "./App";

const posthogKey = process.env.REACT_APP_POSTHOG_KEY;

if (posthogKey) {
  posthog.init(posthogKey, {
    api_host: process.env.REACT_APP_POSTHOG_HOST || "https://us.i.posthog.com",
    capture_pageview: true,
    capture_pageleave: true,
    session_recording: {
      maskAllInputs: true,
    },
  });
}

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
