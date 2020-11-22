import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/styles.css";
import React from "react";
import { Provider } from "react-redux";
import withRedux, { createWrapper } from "next-redux-wrapper";
import makeStore from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

//const wrapper = createWrapper(makeStore);

export default withRedux(makeStore)(MyApp);
