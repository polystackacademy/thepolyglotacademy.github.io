import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import './shared/app.css';
import './i18n';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './app-routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

const routes = AppRoutes();

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback="">
      <IntlProvider locale={navigator.language}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {routes}
        </ThemeProvider>
      </IntlProvider>
    </Suspense>
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
