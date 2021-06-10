import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import Axios from 'axios';
import { config } from '@fortawesome/fontawesome-svg-core';
import Layout from '../components/Layout';
import UserProvider from '../providers/UserProvider';
import RealtimeProvider from '../providers/RealtimeProvider';
import auth from '../auth/auth';
import materialTheme from '../styles/materialTheme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { StylesProvider } from "@material-ui/styles";

import '@fortawesome/fontawesome-svg-core/styles.css';

const theme = {
  main: "white"
};

// Import the CSS
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

Axios.defaults.baseURL = process.env.API_URL; // paste our api url so we don't repeat the base url
Axios.defaults.withCredentials = true; // give permission to send cookies for cross-origin requests from client code

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider userSession={pageProps.userSession}>
      <RealtimeProvider>
        <StylesProvider injectFirst>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </StylesProvider>
      </RealtimeProvider>
    </UserProvider>
  );
}


export default MyApp;
