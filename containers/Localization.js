import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import { addLocaleData, IntlProvider } from 'react-intl';
import moment from 'moment';

import enLocal from 'react-intl/locale-data/en';
import deLocal from 'react-intl/locale-data/de';
import 'moment/locale/de';

import en from 'locales/en';
import defaults from 'locales/defaults';

addLocaleData([...enLocal, ...deLocal]);

const mapStateToProps = ({ localization: { lang } }) => ({ lang });

export default
@withRouter
@connect(mapStateToProps)
class Localization extends Component {
  render() {
    let appLocale = { ...defaults };
    const { lang, children } = this.props;
    switch (lang) {
      default:
        appLocale = { ...appLocale, ...en };
        moment.locale('en');
    }
    return <IntlProvider {...appLocale}>{children}</IntlProvider>;
  }
}
