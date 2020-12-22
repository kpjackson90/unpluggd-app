import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/styles.css";
import React from "react";
import { Provider } from "react-redux";
import withRedux, { createWrapper } from "next-redux-wrapper";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

//const wrapper = createWrapper(makeStore);
const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
