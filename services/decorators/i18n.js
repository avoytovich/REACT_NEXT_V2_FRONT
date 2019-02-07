import React, { Component } from 'react';

export default function i18n(baseName = '') {
  return function(Child) {
    class Localize extends Component {
      test = () => {
        console.warn('test');
      };

      render() {
        return <Child {...this.props} test={this.test} />;
      }
    }
    return Localize;
  };
}
