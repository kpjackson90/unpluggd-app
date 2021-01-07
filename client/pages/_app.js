import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/styles.css";
import React from "react";
import { Provider as AuthProvider } from '../context/AuthContext';


const AppComponent = ({ Component, pageProps}) => {
  return (
    <AuthProvider>
      <Component  {...pageProps} />
      </AuthProvider>
  );
}

export default AppComponent;
