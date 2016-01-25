import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import style from './TabBar.scss';

const propTypes = {
  children: React.PropTypes.node,
  flat: React.PropTypes.bool
};

const defaultProps = {
  flat: false,
  noTabBar: false
};

class TabBar extends React.Component {

  render() {
    const className = classNames(style.root, {
      [style.flat]: this.props.flat
    }, this.props.className);

    return (
      <header className={className} data-react-toolbox="app-bar">
        <nav className={style.navigation}>
          {this.props.children}
        </nav>
      </header>
    );
  }
}

TabBar.propTypes = propTypes;
TabBar.defaultProps = defaultProps;

export default TabBar;
