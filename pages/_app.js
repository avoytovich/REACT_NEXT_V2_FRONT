import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import Localization from 'containers/Localization';

import withReduxStore from 'config/redux/with-redux-store';

export default
@withReduxStore
class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Localization>
            <Component {...pageProps} />
          </Localization>
        </Provider>
      </Container>
    );
  }
}
