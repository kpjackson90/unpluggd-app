import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/styles.css";
import React from "react";
import Api from '../api/build-client';
import { Provider as AuthProvider } from '../context/AuthContext';


const AppComponent = ({ Component, pageProps}) => {
  return (
    <AuthProvider>
      <Component  {...pageProps} />
      </AuthProvider>
  );
}

// AppComponent.getInitialProps = async (appContext) => {
//   const client = Api(appContext.ctx);
//   const { data } = await client.get('/api/user/me');

//   let pageProps = {};
//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(
//       appContext.ctx,
//       client,
//       data?.existingUser
//     )
//   }

//   return {
//     pageProps,
//     ...data
//   }
// }



export default AppComponent;
