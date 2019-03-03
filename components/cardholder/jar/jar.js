import React, { Component } from 'react';

import { cardholder } from '../../../constants/texts';

import './jar.sass';

export default class Jar extends Component {
  render() {
    return (
      <div className="jar-subunion">
        <div className="jar-heading">
          <p className="title">{cardholder.jar.title}</p>
          <div className="addition-union">
            {cardholder.jar.addition.map((item, id) => {
              return (
                <div
                  key={parseInt(id.toString(), 10)}
                  className="addition-union-item">
                  <p className="title-addition">{item.title}</p>
                  <p className="value-addition">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
