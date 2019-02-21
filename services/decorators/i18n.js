import React, { Component } from 'react';
import { injectIntl } from 'react-intl';

export default function i18n(baseName = '') {
  return function(Child) {
    @injectIntl
    class Localize extends Component {
      translate = (key, customName, values) => {
        const { intl } = this.props;
        const name = customName || baseName;
        return intl.formatMessage({ id: `${name}.${key}` }, values);
      };

      render() {
        return <Child {...this.props} translate={this.translate} />;
      }
    }
    return Localize;
  };
}
