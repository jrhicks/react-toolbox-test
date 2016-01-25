import React from 'react';
import style from './View.scss';

class View extends React.Component {

  render() {
    return (
      <div className={style.root}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = View;
