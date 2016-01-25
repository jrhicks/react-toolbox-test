import React from 'react';
import { Container } from 'flux/utils';
import { List } from 'react-toolbox';
import classNames from 'classnames';
import { MainLayoutStore, ListItem } from '../../stores';
import style from './Drawer.scss';

const propTypes = {
  noTabBar: React.PropTypes.bool
};

const defaultProps = {
  noTabBar: false
};

class Drawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = Drawer.calculateState();
  }

  static getStores() {
    return [MainLayoutStore];
  }

  static calculateState() {
    return MainLayoutStore.getState();
  }

  render() {
    const className = classNames(style.root, {
      [style.drawerOpen]: this.state.isDrawerOpen,
      [style.drawerClosed]: !this.state.isDrawerOpen,
      [style.noTabBar]: this.props.noTabBar
    }, this.props.className);

    return (
      <aside className={className}>
        <List className={style.list} selectable ripple>
          {this.props.children}
        </List>
      </aside>
    );
  }
}

Drawer.propTypes = propTypes;
Drawer.defaultProps = defaultProps;

module.exports = Container.create(Drawer, { pure: false, withProps: true });
